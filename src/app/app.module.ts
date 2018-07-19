import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CREDENTIALS } from './firebase.credenciais';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroPageModule } from '../pages/intro/intro.module';
import { ConfigProvider } from '../providers/config/config';
import { AuthProvider } from '../providers/auth/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from '../../node_modules/angularfire2/auth';

import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';
import { TwitterConnect } from '@ionic-native/twitter-connect';
import { SignInPageModule } from '../pages/sign-in/sign-in.module';
import { SignUpPageModule } from '../pages/sign-up/sign-up.module';
import { SignInWithEmailPageModule } from '../pages/sign-in-with-email/sign-in-with-email.module';
import { ResetPasswordPageModule } from '../pages/reset-password/reset-password.module';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IntroPageModule,
    SignInPageModule,
    SignUpPageModule,
    SignInWithEmailPageModule,
    ResetPasswordPageModule,
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConfigProvider,
    AuthProvider,
    GooglePlus,
    Facebook,
    TwitterConnect
  ]
})
export class AppModule {}
