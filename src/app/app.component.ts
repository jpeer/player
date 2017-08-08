import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { BackgroundMode } from '@ionic-native/background-mode';

import firebase from 'firebase'
import {LoginServiceProvider} from "../providers/login-service/login-service";
import {LoginPage} from "../pages/login/login";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage : any= TabsPage;

  constructor(platform: Platform, private statusBar: StatusBar, private splashScreen: SplashScreen,
              private backgroundMode: BackgroundMode, private loginService: LoginServiceProvider) {

      firebase.initializeApp({
          apiKey: "AIzaSyDT49BcSuSRGipcz60ceaRZTIsV9G5CJ8o",
          authDomain: "podmarks.firebaseapp.com",
          databaseURL: "https://podmarks.firebaseio.com",
          projectId: "podmarks",
          storageBucket: "podmarks.appspot.com",
          messagingSenderId: "936243294138"
      });

      platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();

      this.backgroundMode.enable();


      loginService.isLoggedIn().then(loginStatus => {

          splashScreen.hide();

          if (!loginStatus) {
              console.log("dude, you are not logged in.");
              this.rootPage = LoginPage;
          }

      });

    });
  }


}
