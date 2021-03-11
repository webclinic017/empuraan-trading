import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { Camera, CameraOptions, PictureSourceType } from "@ionic-native/Camera/ngx";
import { ActionSheetController, ToastController, Platform, LoadingController, ModalController } from "@ionic/angular";
import { File, FileEntry } from "@ionic-native/File/ngx";
import { HttpClient } from "@angular/common/http";
import { WebView } from "@ionic-native/ionic-webview/ngx";
import { Storage } from "@ionic/storage";
import { FilePath } from "@ionic-native/file-path/ngx";
import { Post } from "src/app/models/post.model";
import { LearningService } from "src/app/services/learning.service";
import { ModalUploadPostComponent } from "src/app/modals/modal-upload-post/modal-upload-post.component";
import { ModalPostComponent } from "src/app/modals/modal-post/modal-post.component";
import { MarubozuService } from "src/app/services/marubozu.service";
import { Marubozu } from "src/app/models/marubozu.model";
import { Input } from "hammerjs";

const STORAGE_KEY = "assets";

@Component({
	selector: "app-intra-day",
	templateUrl: "./intra-day.page.html",
	styleUrls: ["./intra-day.page.scss"],
})
export class IntraDayPage implements OnInit {
	tempPost: Marubozu = {
		_id: "asoifjoaijsfoqwijr1o3i2jr1iojr",
		content: "ifuwe iuhewoifjweoi fjew we iofj iwej oewij oweij few ewff ewoi jewo ijewoi jewoif jeowi jewoifj oewij fweoif pwokqpqdp qw lpqw dlqwp[ dlwpqioj doqpiej d",
		createdDate: "Thu Mar 04 2021 14:55:35 GMT+0000 (Coordinated Universal Time)",
		embededurl: null,
		image: null,
		stockname: "A very new intraday stock name",
		title: "A very new intraday post title",
		type: "intraday",
		user: "sefibra"
	}
	intraDayPosts: Post[];
	intraday: Marubozu[];
	filteredPosts: Marubozu[];
	isActive: boolean;
	dataLoaded: boolean
	// images = [];

	constructor(
		private modalController: ModalController,
		private marubozuService: MarubozuService
	) { }

	ngOnInit() {
		this.getIntraday();
		this.dataLoaded = false
	}

	getIntraday() {
		this.marubozuService.activeTab.subscribe((n) => {
			if (n == 2) {
				this.marubozuService.get("intraday").subscribe((r: any) => {
					this.intraday = r.data;
					this.intraday.reverse()
					this.dataLoaded = true
				});
			}
		});
	}

	async openUploadPostModal(id: number) {
		const modal = await this.modalController.create({
			component: ModalUploadPostComponent,
			componentProps: { intraDay: true },
		});
		modal.onDidDismiss().then((d) => {
			if (d.data == true) {
				this.marubozuService.get("intraday").subscribe((r: any) => {
					this.intraday = r.data;
					this.intraday.reverse()
				});
			}
		});
		return await modal.present();
	}
	async openPostModal(intraDay) {
		const modal = await this.modalController.create({
			component: ModalPostComponent,
			componentProps: { post: intraDay },
		});
		return await modal.present();
	}

	filter(ev) {
		this.filteredPosts = this.intraday.filter((p) => p.title.toLowerCase().includes(ev.detail.value.toLowerCase()));
		// this.filteredPosts.reverse()
	}
}
