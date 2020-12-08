import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartWrapperPage } from './chart-wrapper.page';

const routes: Routes = [
  {
    path: '',
    component: ChartWrapperPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartWrapperPageRoutingModule {}
