import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  apiUrl: string = "http://104.198.233.233/api/v1/stocks/"

  constructor(private http: HttpClient) { }

  getStock(id: string){
    return this.http.get(this.apiUrl + id)
  }

  getStocks(){
    return this.http.get(this.apiUrl)
  }

  orderStockLimitBuy(input){
    return this.http.post(this.apiUrl + 'limit/buy', input)
  }

  orderStockLimitSell(input){
    return this.http.post(this.apiUrl + 'limit/sell', input)
  }

  orderStockMarket(input){
    return this.http.post(this.apiUrl + 'order/market', input)
  }

  createNewStocks(input){
    return this.http.post(this.apiUrl + 'new', input)
  }
}
