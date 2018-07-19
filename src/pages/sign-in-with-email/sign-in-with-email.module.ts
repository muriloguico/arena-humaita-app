import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignInWithEmailPage } from './sign-in-with-email';

@NgModule({
  declarations: [
    SignInWithEmailPage,
  ],
  imports: [
    IonicPageModule.forChild(SignInWithEmailPage),
  ],
  exports: [
    SignInWithEmailPage
  ]
})
export class SignInWithEmailPageModule {}
