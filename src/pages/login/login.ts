import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SignUpPage } from '../signup/signup';
import { TabsPage } from '../../pages/tabs/tabs';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  account: { name: string, email: string, password: string } = {
    name: 'Test Human',
    email: '',
    password: ''
  };
  loginError = false;
  errorMessage = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private fauth: AngularFireAuth, private fdb: AngularFireDatabase) {
  }

  ionViewDidLoad() {
  }

  doLogin() {
    console.log('in login function');
    this.fauth.auth.signInWithEmailAndPassword(this.account.email, this.account.password).then(() => {
      this.navCtrl.setRoot(TabsPage);
    }).catch(error => {
      this.loginError = true;
      this.errorMessage = 'Invalid email or password';
    });
  }

  createAccount() {
    this.navCtrl.push(SignUpPage);
  }

}
