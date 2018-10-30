import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController} from 'ionic-angular';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }
  ann(){
    let alert = this.alertCtrl.create({
      title:"Alert",
      subTitle:"Announcement is soon...",
      buttons: ['OK']
    });
    alert.present();
  }
  personal(){
    let alert = this.alertCtrl.create({
      title:"Alert",
      subTitle:"Personal is soon...",
      buttons: ['OK']
    });
    alert.present();
  }
  attedance(){
    let alert = this.alertCtrl.create({
      title:"Alert",
      subTitle:"Attedance is soon...",
      buttons: ['OK']
    });
    alert.present();
  }
  marks(){
    let alert = this.alertCtrl.create({
      title:"Alert",
      subTitle:"Marks is soon...",
      buttons: ['OK']
    });
    alert.present();
  }
  cgpa(){
    let alert = this.alertCtrl.create({
      title:"Alert",
      subTitle:"CHPA is soon...",
      buttons: ['OK']
    });
    alert.present();
  }
  esa(){
    let alert = this.alertCtrl.create({
      title:"Alert",
      subTitle:"Extra Curricular ctivities is soon...",
      buttons: ['OK']
    });
    alert.present();
  }

}
