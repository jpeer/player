import {Component, OnInit} from '@angular/core';

import {NavController} from 'ionic-angular';
import {DataService} from "../../providers/data-service";
import {IAudioManager} from '../../providers/audiomanager';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage implements OnInit {

    currentPodcastData: any;
    error: string;
    currentSelected: number = 0;
    bookmarks: any = {};
    currentBookmarks: number[] = [];
    currentItem: any = null;

    constructor(public navCtrl: NavController, private dataService: DataService, private audioManager: IAudioManager) {
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
                this.currentBookmarks = this.bookmarks[this.currentPodcastData.items[this.currentSelected].link].positions;
            }
        });
    }

    onItemClicked(idx: number): void {
        this.currentSelected = idx;
        let bookmarkObj = this.bookmarks[this.currentPodcastData.items[idx].link];
        this.currentBookmarks = bookmarkObj ? bookmarkObj.positions : [];
        this.currentItem = this.currentPodcastData.items[idx];
    }

    addBookmark(): void {
        this.dataService.addBookmark(this.currentPodcastData.items[this.currentSelected], this.audioManager.progress);
    }

    removeBookmark(idx: number) {
        this.dataService.removeBookmark(this.currentPodcastData.items[this.currentSelected].link, idx);
    }

    skipToBookmark(idx: number) {
        var pos = this.currentBookmarks[idx];
        this.audioManager.seekTo(pos);
    }

}
