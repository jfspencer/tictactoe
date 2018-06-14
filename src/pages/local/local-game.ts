import { Component } from '@angular/core';
import {IonicPage, AlertController } from 'ionic-angular';
import {Game, TurnEvent, BoardState } from '@shared/interfaces';
import {Persistence} from '@singleton/persist';
import { get } from 'lodash';

@IonicPage()
@Component({
  selector: 'page-local-game',
  templateUrl: 'local-game.html'
})
export class LocalGamePage {

  activeTurn = 0;
  boardState: BoardState = {
    UL: null, UM: null, UR: null,
    ML: null, MM: null, MR: null,
    LL: null, LM: null, LR: null
  };
  game: Game;

  constructor(private alertCtrl: AlertController, private persist: Persistence) {

  }

  ionViewDidLoad() {
    this.createNewGame();
    const startGameAlert = this.alertCtrl.create();

    //check for active game, load if exists
    //or alert to start new game
    //

    //pull in player data from settings
  }

  createNewGame() {
    this.persist.startGame(true).fork(e => console.log(e), game => {this.game; console.log(game)});
    this.activeTurn = get(this, 'game.activeTurn',0);
    //create a game record in the game db, mark the game is active
    //create write sequence record in
  }

  processTurn(turn: TurnEvent) {
    //make other players turn active;
    this.activeTurn = this.activeTurn === 0 ? 1 : 0;

    //send turn to this users' & game's moveSequence record
    //this.persist.updateMoveSequence(this.game, turn).fork(e => console.error(e), newBoard => {this.boardState = newBoard; console.log(newBoard)})
    //construct a new state of the game

    //determine if there is a winner from the game state
  }

}
