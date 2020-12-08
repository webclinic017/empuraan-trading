import { NgForm } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WatchlistService } from 'src/app/services/watchlist.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-modal-watchlist-ce',
  templateUrl: './modal-watchlist-ce.component.html',
  styleUrls: ['./modal-watchlist-ce.component.scss'],
})
export class ModalWatchlistCeComponent implements OnInit {
  @Input() selectedWatchlist: number
  watchlistName: string
  companies = []
  constructor(private modalCtrl: ModalController, private watchlistService: WatchlistService) { }

  ngOnInit() {
    this.watchlistName = this.watchlistService.getWatchlist(this.selectedWatchlist).name
    this.companies = this.watchlistService.getWatchlist(this.selectedWatchlist).companies
  }

  dismissModal(){
    this.modalCtrl.dismiss()
  }
  
  onEditWatchlist(){    
    if(this.watchlistName.trim() != '' && this.watchlistName != null && this.watchlistName != undefined){
      this.watchlistName = this.watchlistName.trim()
      console.log(this.watchlistName)
      this.watchlistService.editWatchlist(this.selectedWatchlist, this.watchlistName)
    }
  }

  drop(event: CdkDragDrop<string[]>){
    moveItemInArray(this.companies, event.previousIndex, event.currentIndex);
  }
}
