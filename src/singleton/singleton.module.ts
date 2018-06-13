import {NgModule, Optional, SkipSelf} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule],
  declarations: [],
  providers: [],
  exports: [BrowserModule]
})
export class SingletonModule {
  constructor(@Optional() @SkipSelf() parentModule: SingletonModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
