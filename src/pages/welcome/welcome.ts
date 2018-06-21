import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase'

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private fauth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    // console.log(this.fb.getLoginStatus());
  }
  emailLogin() {
    this.navCtrl.push(LoginPage)
  }
  googleLogin() {
    console.log('Logging in with Google');
  }
  facebookLogin() {
    console.log('Logging in with Facebook');
  }
  signOut() {
    console.log('signOut');
    this.fauth.auth.signOut();
    // this.fb.logout();
  }

}
