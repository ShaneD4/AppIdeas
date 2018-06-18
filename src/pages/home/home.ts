import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VhcPage } from '../vhc/vhc';
import { AppraisalsPage } from '../appraisals/appraisals';
import { VehiclesPage } from '../vehicles/vehicles';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  toVHCPage(){
    this.navCtrl.setRoot(VhcPage);
  }

  toAppraisalsPage(){
    this.navCtrl.setRoot(AppraisalsPage);
  }

  toVehiclesPage(){
    this.navCtrl.setRoot(VehiclesPage);
  }

}
