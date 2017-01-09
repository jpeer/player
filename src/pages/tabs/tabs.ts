import { Component } from '@angular/core';

import { BookmarksPage } from '../bookmarks/bookmarks';
import {PodcastsPage} from "../podcasts/podcasts";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = PodcastsPage;
  tab2Root: any = BookmarksPage;

  constructor() {

  }
}
