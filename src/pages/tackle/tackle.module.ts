import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TacklePage } from './tackle';

@NgModule({
  declarations: [
    TacklePage,
  ],
  imports: [
    IonicPageModule.forChild(TacklePage),
  ],
})
export class TacklePageModule {}
