import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SliderPage } from '../pages/slider/slider';
import { LoginPage } from '../pages/login/login';
import { AboutPage } from '../pages/about/about';
import { AddInfoPage } from '../pages/add-info/add-info';
import { AddMapPage } from '../pages/add-map/add-map';
import { LocationListPage } from '../pages/location-list/location-list';
import { LocationMapPage } from '../pages/location-map/location-map';
import { ProfilePage } from '../pages/profile/profile';
import { RegisterPage } from '../pages/register/register';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SliderPage,
    LoginPage,
    AboutPage,
    AddInfoPage,
    AddMapPage,
    LocationListPage,
    LocationMapPage,
    ProfilePage,
    RegisterPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SliderPage,
    LoginPage,
    AboutPage,
    AddInfoPage,
    AddMapPage,
    LocationListPage,
    LocationMapPage,
    ProfilePage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
