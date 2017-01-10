import {Component, OnInit} from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';
import {DataService} from "../../providers/data-service";
import {IAudioManager} from '../../providers/audiomanager';
import {Toast} from 'ionic-native';
import {AudioTimePipe} from "../../pipes/ionic-audio-time-pipe";


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage implements OnInit {

    currentPodcast: any;
    currentPodcastData: any;
    error: string;
    currentSelected: number = 0;
    currentItem: any = null;

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
        this.currentSelected = idx;
        this.currentItem = this.currentPodcastData.items[idx];
    }

    addBookmark(): void {
        this.dataService.addBookmark(this.currentPodcastData.items[this.currentSelected], this.audioManager.progress);
        if(window.hasOwnProperty('cordova')) {
            Toast.show('Bookmark added at position ' + new AudioTimePipe().transform(this.audioManager.progress), '2000', 'center').subscribe(toast => {console.log(toast);});
        }
    }

}
