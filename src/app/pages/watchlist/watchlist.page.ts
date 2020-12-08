import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { BuySellModalPopupComponent } from 'src/app/modals/buy-sell-modal-popup/buy-sell-modal-popup.component';
import { ModalEditWatchlistsComponent } from 'src/app/modals/modal-edit-watchlists/modal-edit-watchlists.component';
import { ModalWatchlistCeComponent } from 'src/app/modals/modal-watchlist-ce/modal-watchlist-ce.component';
import { ModalWatchlistComponent } from 'src/app/modals/modal-watchlist/modal-watchlist.component';
import { Company } from 'src/app/models/company.model';
import { Watchlist } from 'src/app/models/watchlist.model';
import { WatchlistService } from 'src/app/services/watchlist.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.page.html',
  styleUrls: ['./watchlist.page.scss'],
})
export class WatchlistPage implements OnInit {
  companies: Company[] = []
  watchlists: Watchlist[] = []
  selectedWatchlist: number = 1
  constructor(private modalController: ModalController, 
    private watchlistService: WatchlistService, 
    private actionSheetController: ActionSheetController) { }

  ngOnInit() {
    this.companies = this.watchlistService.companies
    this.watchlists = this.watchlistService.watchlists
  }

  drop(event: CdkDragDrop<string[]>){
    moveItemInArray(this.watchlists, event.previousIndex, event.currentIndex);
  }

  async openCompaniesModal(id) {
    const modal = await this.modalController.create({
      component: ModalWatchlistComponent,
      componentProps: {selectedWatchlist: id}
    });
    return await modal.present();
  }

  async openWatchlistModal(isEdit: boolean) {
    const modal = await this.modalController.create({
      component: ModalWatchlistCeComponent,
      componentProps: {isEdit, selectedWatchlist: this.selectedWatchlist}
    });
    return await modal.present();
  }

  async openBuySellModal(id: number) {
    const modal = await this.modalController.create({
      component: BuySellModalPopupComponent,
      componentProps: {selectedCompany: id}
    });
    return await modal.present();
  }

  async openManageWatchlists(){
    const modal = await this.modalController.create({
      component: ModalEditWatchlistsComponent,
      // componentProps: {selectedCompany: id}
    });
    return await modal.present();
  }
  
  onWatchlistTabClick(){
    this.watchlistEditActionSheet()
  }

  onWatchlistTitleClick(){
    this.watchlistTitleActionSheet()
  }

  async watchlistTitleActionSheet(){
    const actionSheet = await this.actionSheetController.create({
      header:'Watchlist control panel',
      buttons: [
        {
        text: 'Manage',
        icon: 'cog',
        handler: () => {
          this.openManageWatchlists()
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

  async watchlistEditActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header:'Watchlist manage panel',
      buttons: [
      {
        text: 'Edit',
        icon: 'create-outline',
        handler: () => {
          this.openWatchlistModal(true)
        }
      },{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash-outline',
        handler: () => {
          this.deleteWatchlist()
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel'
      }]
    });
    await actionSheet.present();
  }

  deleteWatchlist(){
    this.watchlistService.deleteWatchlist(this.selectedWatchlist)
  }

  tabIndex(event: any){
    this.selectedWatchlist = event
  }
}
