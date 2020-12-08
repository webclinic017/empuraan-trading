import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChartWrapperPageRoutingModule } from './chart-wrapper-routing.module';

import { ChartWrapperPage } from './chart-wrapper.page';
import { ChartWidgetDirective } from './chart-widget.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartWrapperPageRoutingModule
  ],
  declarations: [ChartWrapperPage],
})
export class ChartWrapperPageModule {}
