import { Component } from '@angular/core';

//import { AboutPage } from '../about/about';
//import { ContactPage } from '../contact/contact';

import {LazyPages} from '@app/LazyPages';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LazyPages.LOCAL_GAME;
  tab2Root = LazyPages.REMOTE_GAME;
  tab3Root = LazyPages.SETTINGS;

  constructor() {

  }
}
