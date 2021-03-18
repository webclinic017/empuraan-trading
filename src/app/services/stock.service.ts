import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import * as io from "socket.io-client";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
	providedIn: "root",
})
export class StockService {
	apiUrl: string = environment.apiUrl + "stocks/order/";
	apiGetStock: string = environment.apiUrl + "stocks/";
	apiStockStart: string = environment.apiUrl + "stocks/start/emit/";
	private socket;

	constructor(private http: HttpClient) {
		this.socket = io(environment.socketUrl);
	}

	listen(eventName) {
		return new Observable((subscriber) => {
			this.socket.on(eventName, (data) => {
				// console.log(eventName,data)
				subscriber.next(data);
			});
		});
	}
	emit(eventName, data) {
		console.log(eventName,data)
		this.socket.emit(eventName, data);
	}

	getStock(id: string) {
		return this.http.get(this.apiGetStock + id);
	}

	getStocks() {
		return this.http.get(this.apiGetStock).pipe(
			map((r: any) => {
				r.data.forEach((c) => {
					c.isLoaded = true
				});
				return r;
			})
		);
	}

	startStock(stockId, watchlistId) {
		return this.http.post(this.apiStockStart, { stockId, watchlistId });
	}

	initStocks() {
		return this.http.post(this.apiUrl + "init", {});
	}

	orderStockLimitBuy(input) {
		return this.http.post(this.apiUrl + "limit/buy", input);
	}

	orderStockLimitSell(input) {
		return this.http.post(this.apiUrl + "limit/sell", input);
	}

	orderStockMarketBuy(input) {
		return this.http.post(this.apiUrl + "market/buy", input);
	}

	orderStockMarketSell(input) {
		return this.http.post(this.apiUrl + "market/sell", input);
	}

	createNewStocks(input) {
		return this.http.post(this.apiUrl + "new", input);
	}
}
