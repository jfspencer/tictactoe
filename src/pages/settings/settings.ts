import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { GamePlayers } from '@shared/interfaces';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  players: GamePlayers = [
    {name: 'Christopher Nolan', turnId: 0, dbId: 'player0'},
    {name: 'Alfred Hitchcock', turnId: 1, dbId: 'player1'}
  ];

  constructor(public navCtrl: NavController) {

  }
}
