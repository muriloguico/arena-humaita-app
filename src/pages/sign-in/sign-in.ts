
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { User } from '../../providers/auth/user';
import { AuthProvider} from '../../providers/auth/auth';
import { NgForm } from '@angular/forms';
import { Component, ViewChild} from '@angular/core';
import { SignUpPage } from '../sign-up/sign-up';
import { SignInWithEmailPage } from '../sign-in-with-email/sign-in-with-email';
import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {
  user: User = new User();
  @ViewChild('form') form: NgForm;

  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    private authService: AuthProvider) {
  }

  createAccount() {
    this.navCtrl.push(SignUpPage);
  }

  signInWithEmailPage() {
    this.navCtrl.push(SignInWithEmailPage);
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle()
      .then(() => {
        this.navCtrl.setRoot(TabsPage);
      })
      .catch((error) => {
        this.toastCtrl.create({ duration: 3000, position: 'bottom', message: 'Erro ao efetuar o login' })
          .present();
      });
  }

  signInWithFacebook() {
    this.authService.signInWithFacebook()
      .then(() => {
        this.navCtrl.setRoot(TabsPage);
      })
      .catch((error) => {
        this.toastCtrl.create({ duration: 3000, position: 'bottom', message: 'Erro ao efetuar o login' })
          .present();
      });
  }

  signInWithTwitter() {
    this.authService.signInWithTwitter()
      .then(() => {
        this.navCtrl.setRoot(TabsPage);
      })
      .catch((error) => {
        this.toastCtrl.create({ duration: 3000, position: 'bottom', message: 'Erro ao efetuar o login' })
          .present();
      });
  }
}