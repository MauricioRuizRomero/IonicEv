import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CbdPage } from './cbd.page';

const routes: Routes = [
  {
    path: '',
    component: CbdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CbdPageRoutingModule {}
