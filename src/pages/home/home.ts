import {Component, OnInit} from '@angular/core';

import {NavController} from 'ionic-angular';
import {DataService} from "../../providers/data-service";
import {WebAudioManager} from "../../app/webaudiomanager";
import {NativeAudioManager} from "../../app/nativeaudiomanager";
import {IAudioManager} from '../../app/audiomanager';


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage implements OnInit {

    currentPodcastData: any;
    error: string;
    currentSelected: number = 0;
    file: any = null;
    bookmarks: any = {};
    currentBookmarks: number[] = [];
    currentTrack: any = null;
    pristine: boolean = true;
    audioManager: IAudioManager;

    constructor(public navCtrl: NavController, private dataService: DataService) {
    }

    ionViewDidEnter() {
        if (window.hasOwnProperty('cordova')) {
            console.log('using cordova plugin for audio');
            this.audioManager = new NativeAudioManager();
        } else {
            console.log('using html5 for audio');
            this.audioManager = new WebAudioManager();
        }
    }

    ngOnInit(): void {

        this.dataService.getActivePodcastData().then(res => {
            this.currentPodcastData = res;
        }, err => {
            this.error = err;
        });

        this.dataService.getBookmarks().subscribe(bm => {
            this.bookmarks = bm;
            if (this.currentPodcastData) {
                this.currentBookmarks = this.bookmarks[this.currentPodcastData.items[this.currentSelected].src];
            }
        });

    }

    onItemClicked(idx: number): void {
        if (this.currentSelected == idx && !this.pristine) {
            this.audioManager.seekTo(0);
            return;
        }
        this.pristine = false;
        this.audioManager.loadTrack(this.currentPodcastData.items[idx].src);
        this.currentSelected = idx;
        this.currentBookmarks = this.bookmarks[this.currentPodcastData.items[idx].src];
        this.onPlay();
    }

    onPlay(): void {
        this.audioManager.play();
    }

    onPause(): void {
        this.audioManager.pause();
    }


    skipAhead(): void {
        var progress = this.audioManager.progress;
        this.audioManager.seekTo(progress + 30);
    }

    skipBack(): void {
        var progress = this.audioManager.progress;
        this.audioManager.seekTo(progress - 30);
    }

    addBookmark(): void {
        this.dataService.addBookmark(this.currentPodcastData.items[this.currentSelected].src, this.audioManager.progress);
    }

    removeBookmark(idx: number) {
        this.dataService.removeBookmark(this.currentPodcastData.items[this.currentSelected].src, idx);
    }

    skipToBookmark(idx: number) {
        var pos = this.currentBookmarks[idx];
        this.audioManager.seekTo(pos);
    }

}
