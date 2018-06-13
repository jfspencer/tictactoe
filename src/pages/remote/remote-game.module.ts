import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RemoteGamePage } from '@pages/remote/remote-game';
import { SharedModule } from '@shared/shared.module';

/**
 * IMPORTANT : register the name literal in app/LazyPages.ts so we are always using references to the string literal lazy names
 * the lazy name is the class name unless it is overridden.
 */

@NgModule({
  declarations: [
    RemoteGamePage
  ],
  imports: [
    IonicPageModule.forChild(RemoteGamePage),
    SharedModule
  ],
})
export class RemoteGameModule {}
