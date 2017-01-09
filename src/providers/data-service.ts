import {Injectable} from '@angular/core';
import {getFeed} from '../util/rss';
import {Storage} from '@ionic/storage';
import {isUndefined} from "ionic-angular/util/util";
import {Observable, BehaviorSubject} from 'rxjs';


@Injectable()
export class DataService {

    static readonly STORAGE_KEY = 'bookmarks.v2';
    activePodcast: string = null;
    bookmarks = new BehaviorSubject({});

    constructor(private storage: Storage) {
        storage.get(DataService.STORAGE_KEY).then((bookmarks) => {
            console.log('loaded bookmarks: ', JSON.stringify(bookmarks, null, 2));
            if (bookmarks) {
                this.bookmarks.next(bookmarks);
            }
        });
    }

    getPodcastsMetaData() : any[] {
        return [
            {
                title: 'Franetic podcast',
                feed: 'http://franetic.podbean.com/feed'
            },
            {
                title: 'GDJB podcast',
                feed: 'http://gdjb.podbean.com/feed'
            }
        ];
    }

    getPodcastUrls() {
        //return ['http://gdjb.podbean.com/feed/'];
        return ['http://franetic.podbean.com/feed'];
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

    addBookmark(item, pos) {
        let bookmark = this.bookmarks.getValue()[item.link];
        if (isUndefined(bookmark)) {
            bookmark = {'positions': [], 'metadata': item };
            this.bookmarks.getValue()[item.link] = bookmark;
        }
        bookmark.positions.push(pos);
        this.storage.set(DataService.STORAGE_KEY, this.bookmarks.getValue()).then(val => {this.bookmarks.next(val);})
    }

    /* URI: the logical link of the podcast episode, not the physical mp3 URL */
    removeBookmark(uri, idx) {
        let bookmark = this.bookmarks.value[uri];
        let positions = bookmark['positions'];
        if (isUndefined(positions) || positions.length < idx - 1) {
            console.log('something wrong');
            return;
        }

        positions.splice(idx, 1);

        if(positions.length === 0) {
            delete this.bookmarks.value[uri];
        }

        this.storage.set('bookmarks', this.bookmarks.getValue()).then(val => {this.bookmarks.next(val);})
    }

}
