import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppraisalsPage } from './appraisals';

@NgModule({
  declarations: [
    AppraisalsPage,
  ],
  imports: [
    IonicPageModule.forChild(AppraisalsPage),
  ],
})
export class AppraisalsPageModule {}
