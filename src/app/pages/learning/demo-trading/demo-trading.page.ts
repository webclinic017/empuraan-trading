import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ModalUploadPostComponent } from 'src/app/modals/modal-upload-post/modal-upload-post.component';
import { MarubozuService } from 'src/app/services/marubozu.service';
import { Marubozu } from 'src/app/models/marubozu.model';
import { ModalPostComponent } from 'src/app/modals/modal-post/modal-post.component';

@Component({
  selector: 'app-demo-trading',
  templateUrl: './demo-trading.page.html',
  styleUrls: ['./demo-trading.page.scss'],
})
export class DemoTradingPage implements OnInit {
  demotrading: Marubozu[]
  filteredDemotrading: Marubozu[]
  dataLoaded: boolean
  constructor(private modalController: ModalController, private marubozuService: MarubozuService) { }

  ngOnInit() {
    this.dataLoaded = false
    this.marubozuService.get('demotrading').subscribe((r: any) => {
      console.log('demotrading',r)
      this.demotrading = r.data
      this.demotrading.reverse()
      this.dataLoaded = true
    })
  }

  async openUploadPostModal(id: number) {
    const modal = await this.modalController.create({
      component: ModalUploadPostComponent,
      componentProps: {demotrading: true}
    });
    modal.onDidDismiss().then((d) => {
			if (d.data == true) {
				this.marubozuService.get("demotrading").subscribe((r: any) => {
					this.demotrading = r.data;
					this.demotrading.reverse()
				});
			}
		});
    return await modal.present();
  }

  async openPostModal(demotrading) {
    const modal = await this.modalController.create({
      component: ModalPostComponent,
      componentProps: {post: demotrading}
    });
    return await modal.present();
  }

  filter(e){
    this.filteredDemotrading = this.demotrading.filter(p => p.title.toLowerCase().includes(e.detail.value.toLowerCase()))
    this.filteredDemotrading.reverse()
  }

}
