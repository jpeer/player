import {Injectable} from '@angular/core';
import {getFeed} from '../util/rss';
import {Storage} from '@ionic/storage';
import {isUndefined} from "ionic-angular/util/util";
import {Observable, BehaviorSubject} from 'rxjs';


@Injectable()
export class DataService {

    activePodcast: string = null;
    bookmarks = new BehaviorSubject({});

    constructor(private storage: Storage) {
        storage.get('bookmarks').then((bookmarks) => {
            console.log('loaded bookmarks: ', JSON.stringify(bookmarks, null, 2));
            if (bookmarks) {
                this.bookmarks.next(bookmarks);
            }
        });
    }

    getPodcastUrls() {
        return ['http://gdjb.podbean.com/feed/'];
    }

    getActivePodcast() {
        if (!this.activePodcast) {
            this.activePodcast = this.getPodcastUrls()[0];
        }
        return this.activePodcast;
    }

    getPodcastData(url: string) {
        console.log('getting data from: ', url);
        return getFeed(url);
    }

    getActivePodcastData() {
        return this.getPodcastData(this.getActivePodcast());
    }

    getBookmarks() : Observable<any> {
        return this.bookmarks.asObservable();
    }

    addBookmark(url, pos) {
        let positions = this.bookmarks.value[url];
        if (isUndefined(positions)) {
            positions = [];
            this.bookmarks.getValue()[url] = positions;
        }
        positions.push(pos);
        this.storage.set('bookmarks', this.bookmarks.getValue()).then(val => {this.bookmarks.next(val);})
    }

    removeBookmark(url, idx) {
        let positions = this.bookmarks.value[url];
        if (isUndefined(positions) || positions.length < idx - 1) {
            console.log('something wrong');
            return;
        }

        positions.splice(idx, 1);
        this.storage.set('bookmarks', this.bookmarks.getValue()).then(val => {this.bookmarks.next(val);})
    }

}
