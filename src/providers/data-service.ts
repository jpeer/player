import {Injectable} from '@angular/core';
import {getFeed} from '../util/rss';
import {Storage} from '@ionic/storage';
import {isUndefined} from "ionic-angular/util/util";
import {Observable, BehaviorSubject} from 'rxjs';
import {IPodcast} from "./podcast";


@Injectable()
export class DataService {

    static readonly STORAGE_KEY = 'bookmarks.v2';
    static readonly PODCASTS_KEY = 'podcasts';
    activePodcast: string = null;
    bookmarks = new BehaviorSubject({});
    podcastsMetaData = new BehaviorSubject<Map<string, IPodcast>>(new Map());

    constructor(private storage: Storage) {
        storage.get(DataService.STORAGE_KEY).then((bookmarks) => {
            console.log('loaded bookmarks: ', JSON.stringify(bookmarks, null, 2));
            if (bookmarks) {
                this.bookmarks.next(bookmarks);
            }
        });

        storage.get(DataService.PODCASTS_KEY).then(podcasts => {
            if(podcasts){
                this.podcastsMetaData.next(podcasts);
            }
        });
    }

    getPodcastsMetaData() : Observable<Map<string, IPodcast>> {
        return this.podcastsMetaData.asObservable();
    }

    addPodcastMetaData(podcast : IPodcast) {
        this.podcastsMetaData.getValue().set(podcast.feed, podcast);
        this.storage.set(DataService.PODCASTS_KEY, this.podcastsMetaData.getValue()).then(val => {this.podcastsMetaData.next(val);})
    }

    removePodcastMetaData(feedUri : string) {
        this.podcastsMetaData.getValue().delete(feedUri);
        this.storage.set(DataService.STORAGE_KEY, this.podcastsMetaData.getValue()).then(val => {this.podcastsMetaData.next(val);})
    }

    getActivePodcast() {
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

        this.storage.set(DataService.STORAGE_KEY, this.bookmarks.getValue()).then(val => {this.bookmarks.next(val);})
    }

}
