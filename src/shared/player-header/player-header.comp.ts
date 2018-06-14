import {Component, Input} from '@angular/core';
import { GamePlayers } from '@shared/interfaces';
import {get} from 'lodash';

@Component({
  selector: 'player-header',
  templateUrl: './player-header.html'
})
export class PlayerHeaderComponent {
  @Input() turn: number;
  @Input() set players(players: GamePlayers) { this.player0 = get(players,'[0].name',''); };
  player0;
  player1;




}
