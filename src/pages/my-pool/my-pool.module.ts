import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyPoolPage } from './my-pool';

@NgModule({
  declarations: [
    MyPoolPage,
  ],
  imports: [
    IonicPageModule.forChild(MyPoolPage),
  ],
})
export class MyPoolPageModule {}
