import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingsPage } from '@pages/settings/settings';
import { SharedModule } from '@shared/shared.module';

/**
 * IMPORTANT : register the name literal in app/LazyPages.ts so we are always using references to the string literal lazy names
 * the lazy name is the class name unless it is overridden.
 */

@NgModule({
  declarations: [
    SettingsPage
  ],
  imports: [
    IonicPageModule.forChild(SettingsPage),
    SharedModule
  ],
})
export class SettingsModule {}
