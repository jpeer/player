import {Component, OnInit} from '@angular/core';

import {NavController} from 'ionic-angular';
import {DataService} from "../../providers/data-service";
import {IAudioManager} from "../../providers/audiomanager";
import {isUndefined} from "ionic-angular/util/util";
import {PlayerPage} from "../player/player";
import {IBookmark} from "../../providers/podcast";

@Component({
    selector: 'page-bookmarks',
    templateUrl: 'bookmarks.html'
})
export class BookmarksPage implements OnInit {

    bookmarks: Map<string, IBookmark> = new Map();

    constructor(public navCtrl: NavController, private dataService: DataService, private audioManager: IAudioManager) {

    }

    ngOnInit() {
        this.dataService.getBookmarks().subscribe((bm) => {
            console.log('bookmarks got updated');
            this.bookmarks = new Map<string, IBookmark>(bm);
        });
    }

    removeBookmark(uri: string, idx: number) {
        this.dataService.removeBookmark(uri, idx);
    }

    onClick(uri: string, idx: number) {
        let bm = this.bookmarks.get(uri);
        if(isUndefined(bm)) {
            return;
        }

        this.navCtrl.push(PlayerPage, { track : bm.metadata, seekTo: bm.positions[idx]});
    }

}
