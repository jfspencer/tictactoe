
import {Component, Input} from '@angular/core';

@Component({
  selector: 'game-board',
  templateUrl: './game-board.html'
})
export class GameBoardComponent {
  @Input() initials: string;
  @Input() color: string;

  constructor() {
  }

}
