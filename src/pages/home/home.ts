import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SliderPage } from '../slider/slider';
import { LocationListPage } from '../location-list/location-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    this.navCtrl.push(LocationListPage)
  }

}
