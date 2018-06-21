import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../../pages/tabs/tabs';

import { AngularFireAuth } from 'angularfire2/auth';
// import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignUpPage {
  account: { name: string, email: string, password: string, confirm: string } = {
    name: '',
    email: '',
    password: '',
    confirm: '',
  };
  signupError = false;
  errorMessage = 'There was an issue';

  constructor(public navCtrl: NavController, public navParams: NavParams, private fauth: AngularFireAuth) {
  }

  // ionViewDidLoad() {
  // }

  doSignup() {
    if (this.account.password === this.account.confirm) {
      this.fauth.auth.createUserWithEmailAndPassword(this.account.email, this.account.password).then((result) => {
        // this.writeUserData(this.fauth.auth.currentUser.uid, this.account.name, this.account.email);
      }).then(() => {
        this.navCtrl.setRoot(TabsPage);
      }).catch(error => {
        this.signupError = true;
        this.errorMessage = error.message;
      });
    } else {
      this.signupError = true;
      this.errorMessage = 'Passwords do not match';
    }
}

}
