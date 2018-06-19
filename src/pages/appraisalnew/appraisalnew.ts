import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppraisalsPage } from '../appraisals/appraisals';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the AppraisalnewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appraisalnew',
  templateUrl: 'appraisalnew.html',
})
export class AppraisalnewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppraisalnewPage');
  }

  goBack(){
    this.navCtrl.setRoot(AppraisalsPage);
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'New Appraisal',
      message: 'Do you want to save and complete this appraisal?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            //Do nothing
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.navCtrl.setRoot(AppraisalsPage);
          }
        }
      ]
    });
    alert.present();
  }

}
