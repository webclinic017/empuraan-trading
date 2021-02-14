import { Component, OnInit, Input, ElementRef, ViewChild } from "@angular/core";
import { ActionSheetController, ModalController, Platform, ToastController } from "@ionic/angular";
import { MarubozuService } from "src/app/services/marubozu.service";
import { CameraSource, CameraResultType, Plugins } from "@capacitor/core";
import { NgForm } from "@angular/forms";
const { Camera } = Plugins;

const STORAGE_KEY = "assets";

export interface ApiImage {
	_id: string;
	name: string;
	createdAt: Date;
	url: string;
}

@Component({
	selector: "app-modal-upload-post",
	templateUrl: "./modal-upload-post.component.html",
	styleUrls: ["./modal-upload-post.component.scss"],
})
export class ModalUploadPostComponent implements OnInit {
	@Input() intraDay: boolean = false;
	@Input() positional: boolean = false;
	@Input() blog: boolean = false;
	@Input() demoTrading: boolean = false;
	spinner: boolean
	title: string;
	stockName: string;
	content: string;
	images = [];
	@ViewChild("fileInput", { static: false }) fileInput: ElementRef;

	constructor(private api: MarubozuService, 
		private plt: Platform, 
		private actionSheetCtrl: ActionSheetController, 
		private modalCtrl: ModalController,
		private toastCtrl: ToastController) {}

	ngOnInit() {
		this.spinner = false
	}

	dismissModal(val?) {
		this.modalCtrl.dismiss(val);
	}

	async selectImageSource() {
		const buttons = [
			{
				text: "Select a Photo",
				icon: "image",
				handler: () => {
					this.addImage(CameraSource.Photos);
				},
			},
		];
		if (!this.plt.is("hybrid")) {
			buttons.push({
				text: "Choose a File",
				icon: "attach",
				handler: () => {
					this.fileInput.nativeElement.click();
				},
			});
		}
		buttons.push({
			text: "Close",
			icon: "close",
			handler: () => {},
		});

		const actionSheet = await this.actionSheetCtrl.create({
			header: "Select Image Source",
			buttons,
		});
		await actionSheet.present();
	}

	async addImage(source: CameraSource) {
		if (this.images.length == 0) {
			const image = await Camera.getPhoto({
				quality: 60,
				allowEditing: true,
				resultType: CameraResultType.Base64,
				source,
			});
			const blobData = this.b64toBlob(image.base64String, `image/${image.format}`);
			const img = URL.createObjectURL(blobData);
			this.images.push({ blobData, name: "img", format: image.format, url: img });
			console.log(this.images);
		}
	}

	uploadFile(postForm: NgForm) {
		let image = this.images[0];
		if (postForm.valid) {
			this.spinner = true
			const title = postForm.value.title;
			const content = postForm.value.content;
			const stockName = postForm.value.stockname;
			let key = "";
			if (this.intraDay == true) key = "intraday";
			else if (this.positional == true) key = "positional";
			else if (this.demoTrading == true) key = "demotrading";
			else if (this.blog == true) key = "blog";
			if(image == undefined || image == null){
				this.api.createWithBlob(title, content, stockName, key).subscribe(() => {
					this.dismissModal(true);
					this.spinner = false
				}, ()=>{
					this.presentErrorToast('Something went wrong.')
					this.spinner = false
				});
			} else {
				this.api.createWithBlob(title, content, stockName, key, image.blobData, image.name, image.format).subscribe(() => {
					this.dismissModal(true);
					this.spinner = false
				}, () => {
					this.presentErrorToast('Something went wrong.')
					this.spinner = false
				});
			}
		} else this.presentErrorToast('Something is missing.')
	}

	deleteImage(index) {
		this.images.splice(index, 1);
	}

	b64toBlob(b64Data, contentType = "", sliceSize = 512) {
		const byteCharacters = atob(b64Data);
		const byteArrays = [];

		for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
			const slice = byteCharacters.slice(offset, offset + sliceSize);

			const byteNumbers = new Array(slice.length);
			for (let i = 0; i < slice.length; i++) {
				byteNumbers[i] = slice.charCodeAt(i);
			}

			const byteArray = new Uint8Array(byteNumbers);
			byteArrays.push(byteArray);
		}

		const blob = new Blob(byteArrays, { type: contentType });
		return blob;
	}

	async presentErrorToast(message){
		const toast = await this.toastCtrl.create({
			header: message,
			color: 'danger',
			duration: 2500
		})

		await toast.present()
	}
}
