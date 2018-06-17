import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VhcPage } from './vhc';

@NgModule({
  declarations: [
    VhcPage,
  ],
  imports: [
    IonicPageModule.forChild(VhcPage),
  ],
})
export class VhcPageModule {}
