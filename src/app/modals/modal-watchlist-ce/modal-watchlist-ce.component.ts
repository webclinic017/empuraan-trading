import { NgForm } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { WatchlistService } from 'src/app/services/watchlist.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Watchlist } from 'src/app/models/watchlist.model';

@Component({
  selector: 'app-modal-watchlist-ce',
  templateUrl: './modal-watchlist-ce.component.html',
  styleUrls: ['./modal-watchlist-ce.component.scss'],
})
export class ModalWatchlistCeComponent implements OnInit {
  @Input() selectedWatchlist: Watchlist
  watchlistName: string
  stocks = []
  changeInWatchlist: boolean
  spinner: boolean
  constructor(private modalCtrl: ModalController, 
    private watchlistService: WatchlistService,
    private toastCtrl: ToastController
    ) { }

  ngOnInit() {
    this.spinner = false
    this.stocks = this.selectedWatchlist.stockIds
    this.watchlistName = this.selectedWatchlist.name
  }

  dismissModal(){
    this.modalCtrl.dismiss(this.changeInWatchlist)
  }
  
  onEditWatchlist(){    
    if(this.watchlistName.trim() != '' && this.watchlistName != null && this.watchlistName != undefined){
      this.spinner = true
      this.watchlistName = this.watchlistName.trim()
      this.watchlistService.editWatchlist(this.selectedWatchlist._id, this.watchlistName).subscribe(r => {
        this.spinner = false
        this.changeInWatchlist = true
        this.presentSuccessToast(`Watchlist's name changed to "${this.watchlistName}"`)
        console.log(r)
      })
    } else this.presentErrorToast('Input field is empty.')
  }

  drop(event: CdkDragDrop<string[]>){
    moveItemInArray(this.stocks, event.previousIndex, event.currentIndex);
    this.changePosition()
  }

  changePosition(){
    const stocks: any[] = []
    for (let i = 0; i < this.stocks.length; i++) {
      const s = this.stocks[i];
      stocks.push({stockId:s.id, position:i})
    }
    this.watchlistService.updateWatchlistStocksPositions(this.selectedWatchlist._id,stocks).subscribe(() => this.changeInWatchlist = true)
  }

  async presentErrorToast(message) {
		const toast = await this.toastCtrl.create({
			message,
			duration: 2500,
			color: "danger",
		});
		await toast.present();
  }
  
	async presentSuccessToast(message) {
		const toast = await this.toastCtrl.create({
			message,
			duration: 2500,
			color: "success",
		});
		await toast.present();
  }
}
