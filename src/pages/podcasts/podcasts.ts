import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DataService} from "../../providers/data-service";
import {HomePage} from "../home/home";
import {SearchPage} from "../search/search";
import {IPodcast} from "../../providers/podcast";
import {Toast} from "@ionic-native/toast";

@Component({
  selector: 'page-podcasts',
  templateUrl: 'podcasts.html'
})
export class PodcastsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataService: DataService,
              private toast: Toast) {}

  podcastsMetadata: Map<string, IPodcast> = new Map();

  ionViewDidLoad() {
    this.dataService.getPodcastsMetaData().subscribe(metadata => {
      console.log('podcastsMetadata got updated');
      this.podcastsMetadata = new Map(metadata);
    });
  }

  openNavDetailsPage(item: IPodcast) {
    this.navCtrl.push(HomePage, { podcast: item });
  }

  openSearchPage() {
    this.navCtrl.push(SearchPage);
  }

  removePodcastMetadata(feedUrl: string) {
    this.dataService.removePodcastMetaData(feedUrl);
    if(window.hasOwnProperty('cordova')) {
      this.toast.show('Podcast removed', '2000', 'center').subscribe(t => {console.log(t);});
    }
  }


}
