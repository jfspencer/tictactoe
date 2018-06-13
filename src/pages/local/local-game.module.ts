import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocalGamePage } from '@pages/local/local-game';
import { SharedModule } from '@shared/shared.module';

/**
 * IMPORTANT : register the name literal in app/LazyPages.ts so we are always using references to the string literal lazy names
 * the lazy name is the class name unless it is overridden.
 */

@NgModule({
  declarations: [
    LocalGamePage
  ],
  imports: [
    IonicPageModule.forChild(LocalGamePage),
    SharedModule
  ],
})
export class LocalGameModule {}
