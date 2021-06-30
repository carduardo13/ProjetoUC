import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BitInfoPageRoutingModule } from './bit-info-routing.module';

import { BitInfoPage } from './bit-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BitInfoPageRoutingModule
  ],
  declarations: [BitInfoPage]
})
export class BitInfoPageModule {}
