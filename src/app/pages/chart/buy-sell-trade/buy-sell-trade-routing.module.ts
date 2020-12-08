import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuySellTradePage } from './buy-sell-trade.page';

const routes: Routes = [
  {
    path: '',
    component: BuySellTradePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuySellTradePageRoutingModule {}
