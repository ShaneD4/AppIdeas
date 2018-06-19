import { Component, ViewEncapsulation } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppraisalsPage } from '../appraisals/appraisals';
import { AppraisalnewPage } from '../appraisalnew/appraisalnew';
import { AppraisalvehicletabPage } from '../appraisalvehicletab/appraisalvehicletab';

/**
 * Generated class for the TabbedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabbed',
  templateUrl: 'tabbed.html',
})
export class TabbedPage {

  tab1Root = AppraisalnewPage;
  tab2Root = AppraisalvehicletabPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabbedPage');
  }

}
