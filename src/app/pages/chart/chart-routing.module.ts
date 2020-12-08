import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartPage } from './chart.page';

const routes: Routes = [
  {
    path: '',
    component: ChartPage
  },
  {
    path: 'chart-wrapper',
    loadChildren: () => import('./chart-wrapper/chart-wrapper.module').then( m => m.ChartWrapperPageModule)
  },
  {
    path: 'historical-data',
    loadChildren: () => import('./historical-data/historical-data.module').then( m => m.HistoricalDataPageModule)
  },
  {
    path: 'buy-sell-trade',
    loadChildren: () => import('./buy-sell-trade/buy-sell-trade.module').then( m => m.BuySellTradePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartPageRoutingModule {}
