import { Watchlist } from './../../models/watchlist.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { WatchlistService } from 'src/app/services/watchlist.service';

@Component({
  selector: 'app-modal-edit-watchlists',
  templateUrl: './modal-edit-watchlists.component.html',
  styleUrls: ['./modal-edit-watchlists.component.scss'],
})
export class ModalEditWatchlistsComponent implements OnInit {
  watchlists = []
  watchlistName: string

  constructor(private modalCtrl: ModalController, private watchlistService: WatchlistService, private userService: UserService) { }

  ngOnInit() {
    this.watchlistService.getUserWatchlists(this.userService.user.id).subscribe((w:Watchlist[]) => this.watchlists = w)
  }

  dismissModal(){
    this.modalCtrl.dismiss()
  }
  
  onCreateWatchlist(createWatchlistForm: NgForm){
    if(this.watchlistName.trim() != '' && this.watchlistName != null && this.watchlistName != undefined){
      this.watchlistName = this.watchlistName.trim()
      this.watchlistService.createWatchlist(this.watchlistName)
      this.watchlistName = ''
    }
  }

  drop(event: CdkDragDrop<string[]>){
    moveItemInArray(this.watchlists, event.previousIndex, event.currentIndex);
  }
}
