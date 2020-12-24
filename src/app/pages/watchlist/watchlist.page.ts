import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { BuySellModalPopupComponent } from 'src/app/modals/buy-sell-modal-popup/buy-sell-modal-popup.component';
import { ModalEditWatchlistsComponent } from 'src/app/modals/modal-edit-watchlists/modal-edit-watchlists.component';
import { ModalWatchlistCeComponent } from 'src/app/modals/modal-watchlist-ce/modal-watchlist-ce.component';
import { ModalWatchlistComponent } from 'src/app/modals/modal-watchlist/modal-watchlist.component';
import { Stock } from 'src/app/models/stock.model';
import { Watchlist } from 'src/app/models/watchlist.model';
import { StockService } from 'src/app/services/stock.service';
import { UserService } from 'src/app/services/user.service';
import { WatchlistService } from 'src/app/services/watchlist.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.page.html',
  styleUrls: ['./watchlist.page.scss'],
})
export class WatchlistPage implements OnInit, OnDestroy {
  companies: Stock[] = []
  watchlists: Watchlist[] = []
  selectedWatchlist: number
  dataLoaded: boolean
  isSimualted: boolean
  subscribedSockets: Subscription[] = []
  constructor(private modalController: ModalController, 
    private watchlistService: WatchlistService, 
    private actionSheetController: ActionSheetController,
    private stockService: StockService,
    private userService: UserService) { }

  ngOnInit() {
    this.selectedWatchlist = 0
    this.dataLoaded = false
    this.watchlistService.getSimulatedWatchlists().subscribe((w:any) => {
      console.log(w)
      // this.watchlists = w.data
      // this.updateLtp()
    })
    this.isSimualted = this.userService.isSimulated
  }

  ionViewDidEnter(){
    this.updateLtp()
  }

  updateLtp(){
    this.unsubscribeFromSockets()
    this.watchlists.forEach(w => {
      w.stockIds.forEach(s => {
        const socketSub: Subscription = this.stockService.listen(s.id).subscribe((res:any) => {
          s.ltp = res[0].price
        })
        this.stockService.getStock(s.id).subscribe((stockData:any) => {
          s.ldp = stockData.data.historyData['1month'][stockData.data.historyData['1month'].length - 1].close
        }, () => {}, () => this.dataLoaded = true)
        this.subscribedSockets.push(socketSub)
      });
    })
  }

  unsubscribeFromSockets(){
    this.subscribedSockets.forEach(s => {
      s.unsubscribe()
    })
    this.subscribedSockets.splice(0, this.subscribedSockets.length)
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

  async openBuySellModal(stock: Stock) {
    const modal = await this.modalController.create({
      component: BuySellModalPopupComponent,
      componentProps: {selectedStock: stock}
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
          // this.removeWatchlist('')
          console.log('update delete')
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel'
      }]
    });
    await actionSheet.present();
  }

  removeWatchlist(id: string){
    this.watchlistService.deleteWatchlist(id)
  }

  tabIndex(tab){
    if(typeof(tab) == 'number') this.selectedWatchlist = tab
    else this.selectedWatchlist = tab.detail
    this.updateLtp()
  }

  ionViewDidLeave(){
    this.unsubscribeFromSockets()
  }

  ngOnDestroy(){
    this.unsubscribeFromSockets()
  }
}
