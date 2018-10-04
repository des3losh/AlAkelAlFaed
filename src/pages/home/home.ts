import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
<<<<<<< HEAD
import { LoginPage } from '../login/login';
import { SliderPage } from '../slider/slider';
import { LocationListPage } from '../location-list/location-list';
=======
import { LocationListPage } from '../location-list/location-list';

>>>>>>> 358de62afe105b8e8f2beea7977b035c3ebe36d9

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
<<<<<<< HEAD
    this.navCtrl.push(LocationListPage)
=======
    this.navCtrl.setRoot(LocationListPage)
>>>>>>> 358de62afe105b8e8f2beea7977b035c3ebe36d9
  }

}
