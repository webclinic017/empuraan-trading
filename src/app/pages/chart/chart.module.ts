import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChartPageRoutingModule } from './chart-routing.module';
import { ChartPage } from './chart.page';
import { ChartWrapperPage } from './chart-wrapper/chart-wrapper.page';
import { HistoricalDataPage } from './historical-data/historical-data.page';
import { BuySellTradePage } from './buy-sell-trade/buy-sell-trade.page';
import { ChartWidgetDirective } from './chart-wrapper/chart-widget.directive';
import { TvChartPage } from './tv-chart/tv-chart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartPageRoutingModule
  ],
  declarations: [
    ChartPage, 
    ChartWrapperPage, 
    HistoricalDataPage, 
    TvChartPage,
    BuySellTradePage, 
    ChartWidgetDirective,
  ]
})
export class ChartPageModule {}
