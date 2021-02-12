import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ModalPostComponent } from "src/app/modals/modal-post/modal-post.component";
import { ModalUploadPostComponent } from 'src/app/modals/modal-upload-post/modal-upload-post.component';
import { Blog } from "src/app/models/blog.model";
import { Marubozu } from "src/app/models/marubozu.model";
import { LearningService } from "src/app/services/learning.service";
import { MarubozuService } from "src/app/services/marubozu.service";

@Component({
	selector: "app-blogs",
	templateUrl: "./blogs.page.html",
	styleUrls: ["./blogs.page.scss"],
})
export class BlogsPage implements OnInit {
	// blogs: Blog[]
	blgs: Marubozu[];
	dataLoaded: boolean;
	constructor(private learningService: LearningService, private modalController: ModalController, private marubozuService: MarubozuService) {}

	ngOnInit() {
		this.dataLoaded = false;
		this.marubozuService.get("blog").subscribe((r: any) => {
			console.log("blog", r);
			this.blgs = r.data;
			this.blgs.reverse();
			this.dataLoaded = true;
		});
	}
	async openUploadPostModal(id: number) {
		const modal = await this.modalController.create({
			component: ModalUploadPostComponent,
			componentProps: { blog: true },
		});
		modal.onDidDismiss().then((d) => {
			if (d.data == true) {
				this.marubozuService.get("blog").subscribe((r: any) => {
					this.blgs = r.data;
					this.blgs.reverse();
				});
			}
		});
		return await modal.present();
	}
	async openPostModal(post) {
		const modal = await this.modalController.create({
			component: ModalPostComponent,
			componentProps: { post },
		});
		return await modal.present();
	}
}
