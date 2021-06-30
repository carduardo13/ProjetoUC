import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DolarInfoPage } from './dolar-info.page';

const routes: Routes = [
  {
    path: '',
    component: DolarInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DolarInfoPageRoutingModule {}
