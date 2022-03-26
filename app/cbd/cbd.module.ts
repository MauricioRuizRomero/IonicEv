import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CbdPageRoutingModule } from './cbd-routing.module';

import { CbdPage } from './cbd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CbdPageRoutingModule
  ],
  declarations: [CbdPage]
})
export class CbdPageModule {}
