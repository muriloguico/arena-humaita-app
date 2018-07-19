
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { ResetPasswordPage } from '../reset-password/reset-password';
import { AuthProvider } from '../../providers/auth/auth';
import { User } from '../../providers/auth/user';
import { NgForm } from '@angular/forms';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-sign-in-with-email',
  templateUrl: 'sign-in-with-email.html',
})
export class SignInWithEmailPage {

  user: User = new User();
  @ViewChild('form') form: NgForm;
  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    private authService: AuthProvider) {
  }

  resetPassword() {
    this.navCtrl.push(ResetPasswordPage);
  }

  signIn() {
    if (this.form.form.valid) {
      this.authService.signIn(this.user)
        .then(() => {
          this.navCtrl.setRoot(TabsPage);
        })
        .catch((error: any) => {
          let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
          if (error.code == 'auth/invalid-email') {
            toast.setMessage('O e-mail digitado não é valido.');
          } else if (error.code == 'auth/user-disabled') {
            toast.setMessage('O usuário está desativado.');
          } else if (error.code == 'auth/user-not-found') {
            toast.setMessage('O usuário não foi encontrado.');
          } else if (error.code == 'auth/wrong-password') {
            toast.setMessage('A senha digitada não é valida.');
          }
          toast.present();
        });
    }
  }
}
