import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DataService} from "../../providers/data-service";
import {HomePage} from "../home/home";
import {SearchPage} from "../search/search";

@Component({
  selector: 'page-podcasts',
  templateUrl: 'podcasts.html'
})
export class PodcastsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataService: DataService) {}

  podcastsMetadata: any[] = [];

  ionViewDidLoad() {
    this.podcastsMetadata = this.dataService.getPodcastsMetaData();
  }

  openNavDetailsPage(item) {
    this.navCtrl.push(HomePage, { podcast: item });
  }

  openSearchPage() {
    this.navCtrl.push(SearchPage);
  }

}
