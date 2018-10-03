import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SliderPage } from '../slider/slider';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    this.navCtrl.push(SliderPage)
  }

}
