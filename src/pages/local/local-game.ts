import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-local-game',
  templateUrl: 'local-game.html'
})
export class LocalGamePage {

  activePlayer = 0;

  constructor(public navCtrl: NavController) {

  }

}
