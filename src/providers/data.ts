import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { getFeed } from '../util/rss'

@Injectable()
export class Data {

  currentPodcast : string;

  constructor(public http: Http) {
    console.log('Hello Data Provider');
  }

  getPodcasts() : string[] {
    return ['http://gdjb.podbean.com/feed'];
  }

  getDataForPodcast(url) : any {
    return getFeed(url);
  }

  getCurrentPodcast() : string {
    return this.currentPodcast;
  }

  setCurrentPodcast(url) {
    this.currentPodcast = url;
  }

}
