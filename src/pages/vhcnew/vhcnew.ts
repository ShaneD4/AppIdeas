import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  hideMe = true;

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

}
