import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buy-sell-trade',
  templateUrl: './buy-sell-trade.page.html',
  styleUrls: ['./buy-sell-trade.page.scss'],
})
export class BuySellTradePage implements OnInit {
  serverName='';
  @Input() config: any;

  @Output() callback: EventEmitter<any> = new EventEmitter();

  model;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    // alert(JSON.stringify(this.model));
    this.callback.emit();
  }

  onCancel() {
    this.callback.emit();
  }
  
//   onUpdateServerName(event: Event){
//     this.serverName=(<HTMLInputElement>event.target).value;
//   }
}
