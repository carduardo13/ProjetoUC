import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DolarInfoPageRoutingModule } from './dolar-info-routing.module';

import { DolarInfoPage } from './dolar-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DolarInfoPageRoutingModule
  ],
  declarations: [DolarInfoPage]
})
export class DolarInfoPageModule {}
