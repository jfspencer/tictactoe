import { Component } from '@angular/core';
import {IonicPage, AlertController } from 'ionic-angular';
import {Game, TurnEvent, BoardState, GamePlayers, Player } from '@shared/interfaces';
import { get } from 'lodash';
import { DomainWorker } from '@singleton/domain.worker';
import { Either } from 'monet';

@IonicPage()
@Component({
  selector: 'page-local-game',
  templateUrl: 'local-game.html'
})
export class LocalGamePage {
  players: GamePlayers;

  activeTurn = 0;
  boardState: BoardState = {
    UL: null, UM: null, UR: null,
    ML: null, MM: null, MR: null,
    LL: null, LM: null, LR: null
  };
  game: Game;

  constructor(private alertCtrl: AlertController, private domainWorker: DomainWorker) {

  }

  ionViewDidLoad() {
    this.createNewGame()
  }

  createNewGame() {
    this.domainWorker.startGame(true).fork(
      e => console.log(e),
      game => {
        this.game = game;
        this.activeTurn = get(this, 'game.activeTurn',0);
        this.boardState = this.domainWorker.newBoardState(this.game);
        this.players = game.players;
      });
    //create a game record in the game db, mark the game is active
    //create write sequence record in
  }

  promptForNewGame() {
    this.alertCtrl.create({
      title: 'Start a new game?',
      buttons: [
        {text: 'Cancel',role: 'cancel',handler: () => null},
        {text: 'New Game', handler: () => this.createNewGame()}]
    }).present()
  }

  processTurn(turn: TurnEvent) {
    //make other players turn active;
    this.activeTurn = this.activeTurn === 0 ? 1 : 0;

    //generate a new game state
    this.game = this.domainWorker.updateGameSequence(this.game, turn)

    //generate a new board state for the game-board component
    this.boardState = this.domainWorker.newBoardState(this.game);

    //check for winner
    const winner = this.domainWorker.determineWinner(this.game.sequence, this.game.players);

    (get(winner, 'name') === 'Scratch Game!' ? Either.Left(this.endGameAlert(winner.name)) : Either.Right(winner))
      .flatMap((w: Player) => {
        w ? this.endGameAlert(w.name + ' is the winner!') : null;
        return Either.Left(null);
      });
  }

  endGameAlert(msg: string) {
    this.alertCtrl.create({
      title: msg,
      buttons: [{text: 'Play Again',handler: () => this.createNewGame()}]
    }).present();
    return null;
  }

}
