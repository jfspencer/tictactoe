import {Component, Input} from '@angular/core';
import { GamePlayers } from '@shared/interfaces';

@Component({
  selector: 'player-header',
  templateUrl: './player-header.html'
})
export class PlayerHeaderComponent {
  @Input() turn: number;
  @Input() players: GamePlayers;




}
