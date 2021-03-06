import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VhcnewPage } from '../vhcnew/vhcnew';

/**
 * Generated class for the VhcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vhc',
  templateUrl: 'vhc.html',
})
export class VhcPage {
  vhcNewPage = VhcnewPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VhcPage');
  }

  newVhcPage() {
    this.navCtrl.setRoot(this.vhcNewPage);
  }


}
