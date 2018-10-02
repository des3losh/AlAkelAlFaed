import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMapPage } from './add-map';

@NgModule({
  declarations: [
    AddMapPage,
  ],
  imports: [
    IonicPageModule.forChild(AddMapPage),
  ],
})
export class AddMapPageModule {}
