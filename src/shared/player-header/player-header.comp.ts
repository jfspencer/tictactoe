import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import { GamePlayers } from '@shared/interfaces';
import {get} from 'lodash';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'player-header',
  templateUrl: './player-header.html'
})
export class PlayerHeaderComponent {
  player0 = '';
  player1 = '';
  @Input() turn: number;
  @Input() set players(players: GamePlayers) {
    this.player0 = get(players,'[0].name','');
    this.player1 = get(players,'[1].name','');
  };





}
