import {Component, OnInit} from '@angular/core';

import {NavController} from 'ionic-angular';
import {DataService} from "../../providers/data-service";
import {IAudioManager} from "../../providers/audiomanager";
import {isUndefined} from "ionic-angular/util/util";

@Component({
    selector: 'page-bookmarks',
    templateUrl: 'bookmarks.html'
})
export class BookmarksPage implements OnInit {

    bookmarks: any;
    currentItem: any = null;

    constructor(public navCtrl: NavController, private dataService: DataService, private audioManager: IAudioManager) {

    }

    ngOnInit() {
        this.dataService.getBookmarks().subscribe((bm) => {
            this.bookmarks = bm;
        })
    }

    removeBookmark(uri: string, idx: number) {
        this.dataService.removeBookmark(uri, idx);
    }

    onClick(uri: string, idx: number) {
        let bm = this.bookmarks[uri];
        if(isUndefined(bm)) {
            return;
        }

        this.currentItem = bm.metadata;
        this.audioManager.seekTo(bm.positions[idx]);
    }

}
