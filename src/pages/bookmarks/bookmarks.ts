import {Component, OnInit} from '@angular/core';

import {NavController} from 'ionic-angular';
import {DataService} from "../../providers/data-service";

@Component({
    selector: 'page-bookmarks',
    templateUrl: 'bookmarks.html'
})
export class BookmarksPage implements OnInit {

    bookmarks: any;

    constructor(public navCtrl: NavController, private dataService: DataService) {

    }

    ngOnInit() {
        this.dataService.getBookmarks().subscribe((bm) => {
            this.bookmarks = bm;
        })
    }


}
