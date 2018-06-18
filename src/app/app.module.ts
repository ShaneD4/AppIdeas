import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { VhcPage } from '../pages/vhc/vhc';
import { VhcnewPage } from '../pages/vhcnew/vhcnew';
import { AppraisalsPage } from '../pages/appraisals/appraisals';
import { VehiclesPage } from '../pages/vehicles/vehicles';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    VhcPage,
    VhcnewPage,
    AppraisalsPage,
    VehiclesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    VhcPage,
    VhcnewPage,
    AppraisalsPage,
    VehiclesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
