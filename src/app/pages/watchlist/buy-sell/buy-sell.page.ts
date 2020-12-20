import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/models/company.model';
import { OrderService } from 'src/app/services/order.service';
import { WatchlistService } from 'src/app/services/watchlist.service';

@Component({
  selector: 'app-buy-sell',
  templateUrl: './buy-sell.page.html',
  styleUrls: ['./buy-sell.page.scss'],
})
export class BuySellPage implements OnInit {
  isBuy: boolean
  company: Company
  availableBalance: number
  approxMargin: number
  capitalAtRisk: number
  @ViewChild('buySellForm') buySellForm: NgForm
  constructor(private route: ActivatedRoute, 
    private watchlistService: WatchlistService,
    private orderService: OrderService,
    private router: Router) { }

  ngOnInit() {
    this.availableBalance = 100000
    this.approxMargin = 2167
    this.capitalAtRisk = this.approxMargin / this.availableBalance
    this.route.queryParams.subscribe(data => {
      data.isBuy == 'true' ? this.isBuy = true : this.isBuy = false
    })
    this.route.params.subscribe(data => 
      this.watchlistService.getCompany(data["id"]).subscribe((c:Company) => {
        this.company = c
      })
    )
  }
  
  navigateToWatchlist(){
    this.router.navigate(['home','watchlist'])
  }
  
  changeType(event: any){
    event.detail.value == 'true' ? this.isBuy = true : this.isBuy = false
  }

  onSubmit(){
    const quantity = this.buySellForm.value.quantity
    const price = this.buySellForm.value.price
    const order = this.buySellForm.value.order
    const stopLoss = this.buySellForm.value.stopLoss
    const target = this.buySellForm.value.target
    if(quantity != '' && order != '' && price != '' && quantity > 0 ){
      if(order != 'market' && price > 0){
        console.log({formVal: this.buySellForm.value})
        this.orderService.buy(this.company.id, quantity, stopLoss, target, order, price)
        this.router.navigate(['home','orders'],{queryParams: {selectTab: 2}})
      } else {
        console.log({formVal: this.buySellForm.value})
        this.orderService.buy(this.company.id, quantity, stopLoss, target, order)
        this.router.navigate(['home','orders'],{queryParams: {selectTab: 2}})
      }
    } else alert('err')
  }
}
