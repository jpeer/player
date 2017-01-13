import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ITrack, IBookmark} from "../../providers/podcast";
import {DataService} from "../../providers/data-service";
import {IAudioManager} from "../../providers/audiomanager";
import {Toast} from 'ionic-native';
import {AudioTimePipe} from "../../pipes/ionic-audio-time-pipe";
import {isDefined} from "ionic-angular/util/util";

@Component({
  selector: 'page-player',
  templateUrl: 'player.html'
})
export class PlayerPage {

  track: ITrack;
  currentBookmarks: IBookmark;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataService: DataService, private audioManager: IAudioManager) {
    this.track = navParams.data.track;
    this.dataService.getBookmarks().subscribe((bm) => {
      console.log('bookmarks got updated');
      this.currentBookmarks = Object.assign({}, bm.get(navParams.data.track.link));
    });
    if(isDefined(navParams.data.seekTo)) {
      this.audioManager.seekTo(navParams.data.seekTo);
    }
  }

  ionViewDidLoad() {
    this.audioManager.play();
  }

  addBookmark(): void {
    this.dataService.addBookmark(this.track, this.audioManager.progress);
    if(window.hasOwnProperty('cordova')) {
      Toast.show('Bookmark added at position ' + new AudioTimePipe().transform(this.audioManager.progress), '2000', 'center').subscribe(toast => {console.log(toast);});
    }
  }

  removeBookmark(idx: number) {
    this.dataService.removeBookmark(this.track.link, idx);
  }

  seekBookmark(idx: number): void {
    this.audioManager.seekTo(this.currentBookmarks.positions[idx]);
  }

}
