import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import { Game, Player, BoardState, TurnEvent, Move } from '@shared/interfaces';
import { now } from 'lodash/fp';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'game-board',
  templateUrl: './game-board.html'
})
export class GameBoardComponent {
  @Input() turn: number;
  @Input() boardState: BoardState;
  @Output() turnEvents = new EventEmitter<TurnEvent>();

  constructor() {
    this.boardState = {
      UL: null, UM: null, UR: null,
      ML: null, MM: null, MR: null,
      LL: null, LM: null, LR: null
    };
  }

  playerAction(move: Move) {
    this.boardState[move] = this.turn;
    this.turnEvents.emit({move: move, turn: this.turn, time: now()});
  }

}
