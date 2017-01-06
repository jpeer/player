import {Component, OnInit} from '@angular/core';

import {NavController} from 'ionic-angular';
import {DataService} from "../../providers/data-service";
import {AudioProvider} from '../../app/ionic-audio/ionic-audio.module';


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
    currentTrack : any = null;

    constructor(public navCtrl: NavController, private dataService: DataService, private audioProvider: AudioProvider) {
    }

    ngOnInit(): void {

        this.dataService.getActivePodcastData().then(res => {
            this.currentPodcastData = res;

            this.audioProvider.tracks.splice(0, this.audioProvider.tracks.length);

            this.currentPodcastData.items.forEach(elem => {
                this.audioProvider.create(elem);
            });
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
        this.unloadCurrentTrack();
        this.currentSelected = idx;
        this.currentBookmarks = this.bookmarks[this.currentPodcastData.items[idx].src];
        this.currentTrack = this.audioProvider.tracks[idx];
        this.onPlay();
    }

    onPlay(): void {
        this.audioProvider.play(this.currentSelected);
    }

    onPause(): void {
        this.audioProvider.pause(this.currentSelected);
    }

    unloadCurrentTrack() : void {
        this.audioProvider.stop(this.currentSelected);
    }

    skipAhead(): void {
        var progress = this.currentTrack.progress;
        this.currentTrack.seekTo(progress + 30);
    }

    skipBack(): void {
        var progress = this.currentTrack.progress;
        this.currentTrack.seekTo(progress - 30);
    }

    addBookmark(): void {
        this.dataService.addBookmark(this.currentPodcastData.items[this.currentSelected].src, this.currentTrack.progress);
    }

    removeBookmark(idx: number) {
        this.dataService.removeBookmark(this.currentPodcastData.items[this.currentSelected].src, idx);
    }

    skipToBookmark(idx: number) {
        var pos = this.currentBookmarks[idx];
        this.currentTrack.seekTo(pos);
    }

}
