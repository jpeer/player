import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DataService} from "../../providers/data-service";
import {HomePage} from "../home/home";

/*
  Generated class for the Podcasts page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-podcasts',
  templateUrl: 'podcasts.html'
})
export class PodcastsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataService: DataService) {}

  podcastsMetadata: any[] = [];

  ionViewDidLoad() {
    console.log('ionViewDidLoad PodcastsPage');
    this.podcastsMetadata = this.dataService.getPodcastsMetaData();
  }

  openNavDetailsPage(item) {
    this.navCtrl.push(HomePage, { podcast: item });
  }

}
