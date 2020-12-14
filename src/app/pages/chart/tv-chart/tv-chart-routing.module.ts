import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TvChartPage } from './tv-chart.page';

const routes: Routes = [
  {
    path: '',
    component: TvChartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TvChartPageRoutingModule {}
