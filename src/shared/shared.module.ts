import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from 'ionic-angular';
import {GameBoardComponent} from '@shared/game-board/game-board.comp';
import {PlayerHeaderComponent} from '@shared/player-header/player-header.comp';

@NgModule({
  declarations: [
    GameBoardComponent,
    PlayerHeaderComponent,
  ],
  providers: [],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    CommonModule,
    IonicModule,
    GameBoardComponent,
    PlayerHeaderComponent
  ]
})
export class SharedModule {}
