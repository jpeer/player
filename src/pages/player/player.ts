import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ITrack, IBookmark} from "../../providers/podcast";
import {DataService} from "../../providers/data-service";
import {IAudioManager} from "../../providers/audiomanager";
import {Toast} from "@ionic-native/toast";
import {AudioTimePipe} from "../../pipes/ionic-audio-time-pipe";
import {isDefined} from "ionic-angular/util/util";

@Component({
    selector: 'page-player',
    templateUrl: 'player.html'
})
export class PlayerPage {

    track: ITrack;
    currentBookmarks: IBookmark;
    seekTo: number = -1;

    constructor(public navCtrl: NavController, public navParams: NavParams, private dataService: DataService,
                private audioManager: IAudioManager, private toast : Toast) {
        this.track = navParams.data.track;
        this.dataService.getBookmarks().subscribe((bm) => {
            console.log('bookmarks got updated');
            this.currentBookmarks = Object.assign({}, bm.get(navParams.data.track.link));
        });
        if (isDefined(navParams.data.seekTo)) {
            this.seekTo = navParams.data.seekTo;
        }
    }

    ionViewDidLoad() {
        this.audioManager.play();
        if (this.seekTo !== -1) {
            this.audioManager.seekTo(this.seekTo);
        }
    }

    addBookmark(): void {
        this.dataService.addBookmark(this.track, this.audioManager.progress);
        if (window.hasOwnProperty('cordova')) {
            this.toast.show('Bookmark added at position ' + new AudioTimePipe().transform(this.audioManager.progress), '2000', 'center').subscribe(toast => {
                console.log(toast);
            });
        }
    }

    removeBookmark(idx: number) {
        this.dataService.removeBookmark(this.track.link, idx);
    }

    seekBookmark(idx: number): void {
        this.audioManager.seekTo(this.currentBookmarks.positions[idx]);
    }

}
