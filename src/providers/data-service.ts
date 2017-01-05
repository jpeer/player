import { Injectable } from '@angular/core';
import { getFeed} from '../util/rss';

@Injectable()
export class DataService {

  activePodcast : string = null;

  getPodcastUrls() {
    return ['http://gdjb.podbean.com/feed/'];
  }

  getActivePodcast() {
    if(!this.activePodcast) {
      this.activePodcast = this.getPodcastUrls()[0];
    }
    return this.activePodcast;
  }

  getPodcastData(url: string) {
    console.log('getting data from: ', url);
    return getFeed(url);
  }

  getActivePodcastData() {
    return  this.getPodcastData(this.getActivePodcast());
  }
}
