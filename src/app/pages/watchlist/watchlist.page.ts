import { ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { ActionSheetController, ModalController } from "@ionic/angular";
import { Subscription } from "rxjs";
import { BuySellModalPopupComponent } from "src/app/modals/buy-sell-modal-popup/buy-sell-modal-popup.component";
import { ModalEditWatchlistsComponent } from "src/app/modals/modal-edit-watchlists/modal-edit-watchlists.component";
import { ModalWatchlistCeComponent } from "src/app/modals/modal-watchlist-ce/modal-watchlist-ce.component";
import { ModalWatchlistComponent } from "src/app/modals/modal-watchlist/modal-watchlist.component";
import { Stock } from "src/app/models/stock.model";
import { Watchlist } from "src/app/models/watchlist.model";
import { StockService } from "src/app/services/stock.service";
import { UserService } from "src/app/services/user.service";
import { WatchlistService } from "src/app/services/watchlist.service";

@Component({
	selector: "app-watchlist",
	templateUrl: "./watchlist.page.html",
	styleUrls: ["./watchlist.page.scss"],
})
export class WatchlistPage implements OnInit, OnDestroy {
	//5fe2f69dc47d337472943100 stock
	//5feed4e5e865548ebf96fa2e watchlist
	cccStock: Stock;
	watchlists: Watchlist[];
	selectedWatchlist: number;
	selectedWatchlistId: string;
	dataLoaded: boolean;
	isSimualted: boolean;
	spinners: string[];
	subscribedSockets: Subscription[] = [];
	constructor(private modalController: ModalController, private watchlistService: WatchlistService, private actionSheetController: ActionSheetController, private stockService: StockService, private userService: UserService) {}

	ngOnInit() {
		this.selectedWatchlist = 0;
		this.isSimualted = true;
	}

	ionViewDidEnter() {
		this.getWatchlists();
	}

	getWatchlists() {
		this.dataLoaded = false;
		this.watchlists = [];
		this.userService.getSettings().subscribe((r: any) => {
			const datatype = r.data.datatype;
			if (datatype == "simulated")
				this.watchlistService.getSimulatedWatchlists().subscribe((r: any) => {
					this.isSimualted = true;
					this.watchlists = r.data;
					this.moveInArray();
					this.updateLtp();
				});
			if (datatype == "realtime")
				this.watchlistService.getRealtimeWatchlists().subscribe((r: any) => {
					this.isSimualted = false;
					this.watchlists = r.data;
					this.moveInArray();
					this.updateLtp();
				});
		});
	}

	subscribeToStockSocket(wId, sId) {
		this.dataLoaded = false;
		this.stockService.startStock(sId, wId).subscribe((r) => this.getWatchlists());
	}

	updateLtp() {
		this.unsubscribeFromSockets();
		this.selectedWatchlistId = this.watchlists[this.selectedWatchlist]._id;
		this.watchlists.forEach((w) => {
			w.stockIds.forEach((s, i) => {
				if (s.started) {
					const socketSub: Subscription = this.stockService.listen(`${s.id}-${w._id}`).subscribe((res: any) => {
						s.ltp = res[0].price;
					});
					this.subscribedSockets.push(socketSub);
				}
				if (i == w.stockIds.length - 1) this.dataLoaded = true;
			});
		});
	}

	unsubscribeFromSockets() {
		this.subscribedSockets.forEach((s) => {
			s.unsubscribe();
		});
		this.subscribedSockets.splice(0, this.subscribedSockets.length);
	}

	async openCompaniesModal(id) {
		const modal = await this.modalController.create({
			component: ModalWatchlistComponent,
			componentProps: { selectedWatchlist: id },
		});
		modal.onDidDismiss().then((d) => {
			console.log(d);
			if (!this.isSimualted) d.data == true && this.getWatchlists();
		});
		return await modal.present();
	}

	async openWatchlistModal(isEdit: boolean) {
		const modal = await this.modalController.create({
			component: ModalWatchlistCeComponent,
			componentProps: { isEdit, selectedWatchlist: this.watchlists[this.selectedWatchlist] },
		});
		modal.onDidDismiss().then((d) => {
			if (!this.isSimualted) d.data == true && this.getWatchlists();
		});
		return await modal.present();
	}

	async openBuySellModal(stock: Stock) {
		const modal = await this.modalController.create({
			component: BuySellModalPopupComponent,
			componentProps: { selectedStock: stock, selectedWatchlistId: this.selectedWatchlistId },
		});
		return await modal.present();
	}

	async openManageWatchlists() {
		const modal = await this.modalController.create({
			component: ModalEditWatchlistsComponent,
		});
		modal.onDidDismiss().then((d) => {
			if (!this.isSimualted) d.data == true && this.getWatchlists();
		});
		return await modal.present();
	}

	onWatchlistTabClick() {
		this.watchlistEditActionSheet();
	}

	onWatchlistTitleClick() {
		this.watchlistTitleActionSheet();
	}

	async watchlistTitleActionSheet() {
		const actionSheet = await this.actionSheetController.create({
			header: "Watchlist control panel",
			buttons: [
				{
					text: "Manage",
					icon: "cog",
					handler: () => {
						this.openManageWatchlists();
					},
				},
				{
					text: "Cancel",
					icon: "close",
					role: "cancel",
				},
			],
		});
		await actionSheet.present();
	}

	async watchlistEditActionSheet() {
		const actionSheet = await this.actionSheetController.create({
			header: "Watchlist manage panel",
			buttons: [
				{
					text: "Edit",
					icon: "create-outline",
					handler: () => {
						this.openWatchlistModal(true);
					},
				},
				{
					text: "Delete",
					role: "destructive",
					icon: "trash-outline",
					handler: () => {
						// this.removeWatchlist('')
						this.watchlistService.deleteWatchlist(this.watchlists[this.selectedWatchlist]._id).subscribe((r) => console.log("delete", r));
					},
				},
				{
					text: "Cancel",
					icon: "close",
					role: "cancel",
				},
			],
		});
		await actionSheet.present();
	}

	removeWatchlist(id: string) {
		this.watchlistService.deleteWatchlist(id);
	}

	tabIndex(tab) {
		if (typeof tab == "number") this.selectedWatchlist = tab;
		else this.selectedWatchlist = tab.detail;
		this.selectedWatchlistId = this.watchlists[this.selectedWatchlist]._id;
		this.updateLtp();
	}

	moveInArray() {
		this.watchlists.sort(this.sortByPosition);
		for (let i = 0; i < this.watchlists.length; i++) {
			this.watchlists[i].stockIds.sort(this.sortByPosition);
		}
	}

	sortByPosition(a, b) {
		if (a.position < b.position) return -1;
		if (a.position > b.position) return 1;
		return 0;
	}

	ionViewDidLeave() {
		this.dataLoaded = false;
		this.unsubscribeFromSockets();
	}

	ngOnDestroy() {
		this.unsubscribeFromSockets();
	}
}
