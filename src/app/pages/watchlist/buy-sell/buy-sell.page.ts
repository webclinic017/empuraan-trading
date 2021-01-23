import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { OrderService } from 'src/app/services/order.service';
import { StockService } from 'src/app/services/stock.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-buy-sell',
  templateUrl: './buy-sell.page.html',
  styleUrls: ['./buy-sell.page.scss'],
})
export class BuySellPage implements OnInit, AfterViewInit {
  isBuy: boolean
  company: any
  wId: string
  price: number = 0
  quantity: number = 0
  availableBalance: number
  capitalAtRisk: number = 0
  limitVal: number = 0
  approxMargin: number = 0
  leverage: number = 0
  risk: number = 0
  transactionSpinner: boolean
  @ViewChild('buySellForm') buySellForm: NgForm
  @ViewChild('marketRadio') marketRadio
  constructor(private route: ActivatedRoute, 
    private stockService: StockService,
    private toastCtrl: ToastController,
    private router: Router,
    private userService: UserService) { }

  ngOnInit(){
    this.transactionSpinner = false
  }
  
  ionViewDidEnter() {
    this.userService.getSettings().subscribe((r:any) => {
      this.leverage = r.data.leverage
      this.risk = r.data.risk
    })
    this.userService.accountDetails().subscribe((res:any) => {
      this.availableBalance = res.account.currentBalance
    })
    this.route.queryParams.subscribe(data => {
      data.isBuy == 'true' ? this.isBuy = true : this.isBuy = false
    })
    this.route.params.subscribe(data => {
      this.stockService.getStock(data.id).subscribe((c:any) => {
        this.company = c.data
        this.wId = data.wId
        this.updateLtp()
      })
    })
  }
  ngAfterViewInit(){
    this.buySellForm.valueChanges.subscribe(data => {
      this.approxMargin = parseFloat(data.price) * data.quantity / this.leverage
      this.capitalAtRisk = (data.quantity * Math.abs(data.stopLoss - data.price)) / 100
      if((data.quantity == 0 && data.price == 0) || data.quantity == null || data.price == null){
        this.capitalAtRisk = 0
        this.approxMargin = 0
      }
    });
  }
  
  updateLtp(){
    this.stockService.listen(`${this.company?._id}-${this.wId}`).subscribe((res:any) => {
      this.company.ltp = res[0].price
    })
  }

  navigateToWatchlist(){
    this.router.navigate(['home','watchlist'])
  }
  
  changeType(event: any){
    event.detail.value == 'true' ? this.isBuy = true : this.isBuy = false
  }

  onSubmit(){
    this.transactionSpinner = true
    const quantity = this.buySellForm.value.quantity
    const price = this.buySellForm.value.price
    const order = this.buySellForm.value.order
    const stopLoss = this.buySellForm.value.stopLoss
    const target = this.buySellForm.value.target
    const risk = this.risk / 100 * this.availableBalance
    if(quantity != '' && order != '' && price != '' && quantity > 0){
      if(order == 'limit' && price > 0){
        if(risk >= (price * quantity)){
          this.isBuy 
            ?  this.buy(this.company._id, this.wId, quantity, stopLoss, target, order, this.availableBalance, +price)
            :  this.sell(this.company._id, this.wId, quantity, stopLoss, target, order, this.availableBalance, +price)
        } else {
          this.transactionSpinner = false
          this.presentErrorToast('Your price is higher than your risk.')
        }
      } else {
        if(risk >= (price * quantity)){
          this.isBuy 
            ?  this.buy(this.company._id, this.wId, quantity, stopLoss, target, order, this.availableBalance, +this.company.ltp)
            :  this.sell(this.company._id, this.wId, quantity, stopLoss, target, order, this.availableBalance, +this.company.ltp)
        } else {
          this.transactionSpinner = false
          this.presentErrorToast('Your price is higher than your risk.')
        }
      }
    } else {
      this.transactionSpinner = false
      this.presentErrorToast('Something is missing.')
    }
  }

  buy(cId: string, watchlistId: string,quantity: number, stopLoss: number, target: number, order: string, availableBal: number, price?: number){
    if(availableBal >= price){
      let company
      this.stockService.getStock(cId).subscribe((c:any) => {
        company = c.data
        var pending
        pending = {stockId: cId, watchlistId, volume: quantity, stoploss: stopLoss, target, price}
        order == 'limit'
        ? this.stockService.orderStockLimitBuy(pending).subscribe(()=>{},(err)=>{
          this.transactionSpinner = false
          this.presentErrorToast(err)
        },()=>{
          this.transactionSpinner = false
          this.router.navigate(['home','orders'])
        })
        : this.stockService.orderStockMarketBuy(pending).subscribe(()=>{},(err)=>{
          this.transactionSpinner = false
          this.presentErrorToast(err)
        },()=>{
          this.transactionSpinner = false
          this.router.navigate(['home','orders'])
        })
      })
    } else {
      this.transactionSpinner = false
      this.presentErrorToast('You have insufficient balance.')
    }
  }
  
  sell(cId: string, watchlistId: string,quantity: number, stopLoss: number, target: number, order: string, availableBal: number, price?: number){
    let company
    this.stockService.getStock(cId).subscribe((c:any) => {
      company = c.data
      var pending
      pending = {stockId: cId, watchlistId, volume: quantity, stoploss: stopLoss, target, price}
      order == 'limit'
      ? this.stockService.orderStockLimitSell(pending).subscribe(()=>{},(err)=>{
        this.transactionSpinner = false
        this.presentErrorToast(err)
      },()=>{
        this.transactionSpinner = false
        this.router.navigate(['home','orders'])
      })
      : this.stockService.orderStockMarketSell(pending).subscribe(()=>{},(err)=>{
        this.transactionSpinner = false
        this.presentErrorToast(err)
      },()=>{
        this.transactionSpinner = false
        this.router.navigate(['home','orders'])
      })
    })
  }

  async presentErrorToast(message) {
    const toast = await this.toastCtrl.create({
      message,
      color: 'danger',
      duration: 2500
    });
    toast.present();
  }
}
