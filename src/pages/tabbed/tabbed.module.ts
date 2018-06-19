import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabbedPage } from './tabbed';

@NgModule({
  declarations: [
    TabbedPage,
  ],
  imports: [
    IonicPageModule.forChild(TabbedPage),
  ],
})
export class TabbedPageModule {}
