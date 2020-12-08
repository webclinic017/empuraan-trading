import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ModalUploadPostComponent } from 'src/app/modals/modal-upload-post/modal-upload-post.component';

@Component({
  selector: 'app-demo-trading',
  templateUrl: './demo-trading.page.html',
  styleUrls: ['./demo-trading.page.scss'],
})
export class DemoTradingPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  async openUploadPostModal(id: number) {
    const modal = await this.modalController.create({
      component: ModalUploadPostComponent,
      componentProps: {demoTrading: true}
    });
    return await modal.present();
  }

}
