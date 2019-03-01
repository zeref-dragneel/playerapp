import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AcclerationPage } from '../pages/accleration/accleration';
import { ForcePage } from '../pages/force/force';
import { OrientationPage } from '../pages/orientation/orientation';
import { TacklePage } from '../pages/tackle/tackle';
import { ConnectPage } from '../pages/connect/connect';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AcclerationPage,
    ForcePage,
    OrientationPage,
    TacklePage,
    ConnectPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AcclerationPage,
    ForcePage,
    OrientationPage,
    TacklePage,
    ConnectPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
