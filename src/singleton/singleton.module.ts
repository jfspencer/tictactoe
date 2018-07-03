import {NgModule, Optional, SkipSelf} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Persistence} from '@singleton/persist';
import {DomainWorker} from '@singleton/domain.worker';

@NgModule({
  imports: [BrowserModule],
  declarations: [],
  providers: [Persistence, DomainWorker],
  exports: [BrowserModule]
})
export class SingletonModule {
  constructor(@Optional() @SkipSelf() parentModule: SingletonModule) {
    const coreModuleError = () => {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only')
    };
    parentModule ? coreModuleError() : null;
  }
}
