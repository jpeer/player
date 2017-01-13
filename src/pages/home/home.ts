import {Component, OnInit} from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';
import {DataService} from "../../providers/data-service";
import {IAudioManager} from '../../providers/audiomanager';
import {IPodcast} from "../../providers/podcast";
import {PlayerPage} from "../player/player";


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage implements OnInit {

    currentPodcast: IPodcast;
    currentPodcastData: any;
    error: string;

    constructor(public navCtrl: NavController, params: NavParams, private dataService: DataService, private audioManager: IAudioManager) {
        this.currentPodcast = params.data.podcast;
    }

    ngOnInit(): void {
        this.dataService.getPodcastData(this.currentPodcast.feed).then(res => {
            this.currentPodcastData = res;
        }, err => {
            this.error = err;
        });
    }

    onItemClicked(idx: number): void {
        this.navCtrl.push(PlayerPage, { track : this.currentPodcastData.items[idx]});
    }

}
