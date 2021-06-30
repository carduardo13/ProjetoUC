import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EuroInfoPageRoutingModule } from './euro-info-routing.module';

import { EuroInfoPage } from './euro-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EuroInfoPageRoutingModule
  ],
  declarations: [EuroInfoPage]
})
export class EuroInfoPageModule {}
