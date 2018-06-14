
import {Component, Input, Output, EventEmitter} from '@angular/core';
import { GameState, Players } from '@shared/interfaces';
import { get } from 'lodash/fp';
@Component({
  selector: 'game-board',
  templateUrl: './game-board.html'
})
export class GameBoardComponent {
  @Input() turn: number;
  @Input() players: Players;
  @Output() sendGameState = new EventEmitter<GameState>();
  private state: GameState;

  constructor() {
    this.state = {
      UL: null, UM: null, UR: null,
      ML: null, MM: null, MR: null,
      LL: null, LM: null, LR: null
    }
  }

  playerAction(move: string) {
    this.state[move] = this.turn;
    this.sendGameState.emit(this.state);
  }

}
