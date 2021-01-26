import { Watchlist } from "./../../models/watchlist.model";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ModalController, ToastController } from "@ionic/angular";
import { Subscription } from "rxjs";
import { UserService } from "src/app/services/user.service";
import { WatchlistService } from "src/app/services/watchlist.service";

@Component({
	selector: "app-modal-edit-watchlists",
	templateUrl: "./modal-edit-watchlists.component.html",
	styleUrls: ["./modal-edit-watchlists.component.scss"],
})
export class ModalEditWatchlistsComponent implements OnInit {
	watchlists: Watchlist[] = [];
	watchlistName: string;
	changeInWatchlist: boolean;
	spinner: boolean;
	dataLoaded: boolean;

	constructor(private modalCtrl: ModalController, private watchlistService: WatchlistService, private userService: UserService, private toastCtrl: ToastController) {}

	ngOnInit() {
		this.spinner = false;
		this.dataLoaded = false;
		this.getWatchlists();
	}

	getWatchlists() {
		this.userService.getSettings().subscribe((r: any) => {
			const datatype = r.data.datatype;
			if (datatype == "simulated")
				this.watchlistService.getSimulatedWatchlists().subscribe((r) => {
					console.log("simulated", r);
					this.dataLoaded = true;
				});
			if (datatype == "realtime")
				this.watchlistService.getRealtimeWatchlists().subscribe((r: any) => {
					console.log("realtime", r);
					this.watchlists = r.data;
					this.dataLoaded = true;
				});
		});
	}

	dismissModal() {
		this.modalCtrl.dismiss(this.changeInWatchlist);
	}

	onCreateWatchlist() {
		if (this.watchlistName?.trim() != "" && this.watchlistName != null && this.watchlistName != undefined) {
			this.spinner = true;
			this.watchlistName = this.watchlistName.trim();
			this.watchlistService.createWatchlist(this.watchlistName).subscribe(() => {
				this.changeInWatchlist = true;
				this.spinner = false;
				this.presentSuccessToast(`"${this.watchlistName}" was successfuly created.`);
				this.watchlistName = "";
				this.getWatchlists()
			});
		} else this.presentErrorToast("Input field is empty.");
	}

	drop(event: CdkDragDrop<string[]>) {
		moveItemInArray(this.watchlists, event.previousIndex, event.currentIndex);
		this.changePosition();
	}

	changePosition() {
		const positions: any[] = [];
		for (let i = 0; i < this.watchlists.length; i++) {
			const w = this.watchlists[i];
			positions.push({ watchlistId: w._id, position: i });
		}
		this.watchlistService.updateWatchlistPositions(positions).subscribe(() => (this.changeInWatchlist = true));
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
