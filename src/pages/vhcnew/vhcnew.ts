import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VhcPage } from '../vhc/vhc';

/**
 * Generated class for the VhcnewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vhcnew',
  templateUrl: 'vhcnew.html',
})
export class VhcnewPage {

  hideMe = false;
  hideMeNew = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VhcnewPage');
  }

  hide(){
    if(this.hideMe == false){
      this.hideMe = true;
    }
    else{
      this.hideMe = false;
    }
    
  }

  hideNew(){
    if(this.hideMeNew == false){
      this.hideMeNew = true;
    }
    else{
      this.hideMeNew = false;
    }
    
  }

  goBack(){
    this.navCtrl.setRoot(VhcPage);
  }

}
