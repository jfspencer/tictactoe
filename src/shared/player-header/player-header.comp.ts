
import {Component, Input} from '@angular/core';

@Component({
  selector: 'player-header',
  templateUrl: './player-header.html'
})
export class PlayerHeaderComponent {
  @Input() atPlay: number;
}
