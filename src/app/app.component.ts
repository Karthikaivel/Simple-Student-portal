import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = RegisterPage;
  public alertShown:boolean=false;

  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public alertCtrl:AlertController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      platform.registerBackButtonAction(() => {
        if (this.alertShown==false) {
          this.presentConfirm();  
        }
       }, 0)
    });
  }
  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'STUDENT PORTAL',
      message: 'Do you want Exit?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            this.alertShown=false;
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Yes clicked');
            this.platform.exitApp();
          }
        }
      ]
    });
     alert.present().then(()=>{
      this.alertShown=true;
    });
  }
}

