import {Component, Input} from '@angular/core';
import { Players } from '@shared/interfaces';

@Component({
  selector: 'player-header',
  templateUrl: './player-header.html'
})
export class PlayerHeaderComponent {
  @Input() turn: number;
  @Input() players: Players;




}
