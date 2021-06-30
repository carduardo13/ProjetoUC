import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BitInfoPage } from './bit-info.page';

const routes: Routes = [
  {
    path: '',
    component: BitInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BitInfoPageRoutingModule {}
