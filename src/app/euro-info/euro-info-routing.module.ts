import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EuroInfoPage } from './euro-info.page';

const routes: Routes = [
  {
    path: '',
    component: EuroInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EuroInfoPageRoutingModule {}
