import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppraisalnewPage } from '../appraisalnew/appraisalnew';

/**
 * Generated class for the AppraisalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appraisals',
  templateUrl: 'appraisals.html',
})
export class AppraisalsPage {
  appraisalsnewPage = AppraisalnewPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppraisalsPage');
  }

  newAppraisalPage() {
    this.navCtrl.setRoot(this.appraisalsnewPage);
  }

}
