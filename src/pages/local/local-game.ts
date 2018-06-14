import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Players } from '@shared/interfaces';

@IonicPage()
@Component({
  selector: 'page-local-game',
  templateUrl: 'local-game.html'
})
export class LocalGamePage {

  activeTurn = 1;
  players: Players = [{name:'Jim', turnId: 0, dbId:'1234'},{name:'Jones', turnId: 1, dbId:'12345'}]

  constructor(public navCtrl: NavController) {

  }

}
