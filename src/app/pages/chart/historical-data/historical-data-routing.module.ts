import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoricalDataPage } from './historical-data.page';

const routes: Routes = [
  {
    path: '',
    component: HistoricalDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoricalDataPageRoutingModule {}
