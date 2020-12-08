import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoricalDataPageRoutingModule } from './historical-data-routing.module';

import { HistoricalDataPage } from './historical-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoricalDataPageRoutingModule
  ],
  declarations: [HistoricalDataPage]
})
export class HistoricalDataPageModule {}
