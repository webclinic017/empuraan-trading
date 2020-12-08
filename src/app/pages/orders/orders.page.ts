import { Component, OnInit } from '@angular/core';
import { Completed } from 'src/app/models/completed.model';
import { Pending } from 'src/app/models/pending.model';
import { Position } from 'src/app/models/position.model';
import { OrderService } from 'src/app/services/order.service';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { ModalEditOrderComponent } from 'src/app/modals/modal-edit-order/modal-edit-order.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  position: Position[]
  completed: Completed[]
  pending: Pending[]
  totalPandL: number
  pageIndex: number = 0
  constructor(private orderService: OrderService, 
    private route: ActivatedRoute,
    private modalCtrl: ModalController,
    private actionSheetController: ActionSheetController) { }

  ngOnInit() {
    this.position = this.orderService.position
    this.completed = this.orderService.completed
    this.pending = this.orderService.pending
    this.totalPandL = this.orderService.totalPandL()
    // this.route.queryParams.subscribe(q => {
    //   // selectTab(q.selectTab)
    // })
  }

  tabIndex(ev){
    this.pageIndex = ev.detail.index
  }

  async ordersActionSheet(order){
    const actionSheet = await this.actionSheetController.create({
      header:'Order control panel',
      buttons: [
      {
        text: 'Manage',
        icon: 'cog',
        handler: () => {
          if(this.pageIndex == 0)
            this.openModalEditOrderPosition(order)
          else if(this.pageIndex == 2)
            this.openModalEditOrderPending(order)
        }
       }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel'
        }
      ]
    });
    await actionSheet.present();
  }

  async openModalEditOrderPosition(position) {
    const modal = await this.modalCtrl.create({
      component: ModalEditOrderComponent,
      componentProps: {position}
    });
    return await modal.present();
  }

  async openModalEditOrderPending(pending) {
    const modal = await this.modalCtrl.create({
      component: ModalEditOrderComponent,
      componentProps: {pending}
    });
    return await modal.present();
  }
}
