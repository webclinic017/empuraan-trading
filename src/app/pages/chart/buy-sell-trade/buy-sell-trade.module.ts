import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuySellTradePageRoutingModule } from './buy-sell-trade-routing.module';

import { BuySellTradePage } from './buy-sell-trade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuySellTradePageRoutingModule
  ],
  declarations: [BuySellTradePage]
})
export class BuySellTradePageModule {}
