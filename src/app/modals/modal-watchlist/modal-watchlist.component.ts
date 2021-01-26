import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Stock } from "src/app/models/stock.model";
import { Watchlist } from "src/app/models/watchlist.model";
import { StockService } from "src/app/services/stock.service";
import { WatchlistService } from "src/app/services/watchlist.service";

@Component({
	selector: "app-modal-watchlist",
	templateUrl: "./modal-watchlist.component.html",
	styleUrls: ["./modal-watchlist.component.scss"],
})
export class ModalWatchlistComponent implements OnInit {
	stocks: Stock[];
	filteredData: Stock[];
	sWatchlist: Watchlist;
	changeOfWatchlist: boolean;
	spinner: boolean;
	i: number;
	@Input() selectedWatchlist: string;

	constructor(private modalCtrl: ModalController, private watchlistService: WatchlistService, private stockService: StockService) {}

	ngOnInit() {
		this.i = 0;
		this.spinner = true;
		this.stockService.getStocks().subscribe((s: any) => {
			this.stocks = s.data;
			this.spinner = false;
		});
		this.watchlistService.getWatchlist(this.selectedWatchlist).subscribe((w: any) => {
			this.sWatchlist = w.data;
		});
	}

	dismissModal() {
		const v = this.changeOfWatchlist;
		this.changeOfWatchlist = false;
		this.modalCtrl.dismiss(v);
	}

	onSelect(event, stock) {
		const e = event.detail.checked;
		if (e != null || e != undefined) {
			const sIndex = this.stocks.indexOf(this.stocks.find((s) => s._id == stock._id));
			this.stocks[sIndex].isLoaded = false;
			if (e == true) {
				this.watchlistService.addToWatchlist(this.selectedWatchlist, stock._id).subscribe(() => {
					this.stocks[sIndex].isLoaded = true;
				});
			} else if (e == false) {
				this.watchlistService.removeFromWatchlist(this.selectedWatchlist, stock._id).subscribe(() => {
					this.stocks[sIndex].isLoaded = true;
				});
			}
			this.changeOfWatchlist = true;
		}
	}

	filter(filterValue: string) {
		this.filteredData = this.stocks.filter((stock) => stock.companyName.toLowerCase().includes(filterValue.toLowerCase()));
	}

	seeIfChecked(stock) {
		if (this.sWatchlist?.stockIds.length > 0) {
			const v = this.sWatchlist?.stockIds.find((s) => s.id == stock._id);
			if (v != null || v != undefined) {
				return true;
			}
		} else return false;
	}
}
