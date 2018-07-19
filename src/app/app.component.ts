import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroPage } from '../pages/intro/intro';
import { ConfigProvider } from '../providers/config/config';
import { TabsPage } from '../pages/tabs/tabs';
import { SignInPage } from '../pages/sign-in/sign-in';

import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'app.html',
  providers: [
    
    ConfigProvider
  
  ]
})
export class MyApp {
  rootPage:any;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    configProvider: ConfigProvider,
    afAuth: AngularFireAuth
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      let config = configProvider.getConfigData();

      if(config == null){
        this.rootPage = IntroPage;
        configProvider.setConfigData(false);
      }
      else{
        afAuth.authState.subscribe(user => {
          if (user) {
            this.rootPage = TabsPage;
          } else {
            this.rootPage = SignInPage;
          }
        });
      }

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
