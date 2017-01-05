import {Component, OnInit} from '@angular/core';

import { NavController } from 'ionic-angular';
import {DataService} from "../../providers/data-service";
import { AudioProvider } from '../../app/ionic-audio/ionic-audio.module';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {


  currentPodcastData : any;
  error: string;
  currentSelected: number = 0;
  file: any = null;

  constructor(public navCtrl: NavController, private dataService : DataService, private audioProvider : AudioProvider) {
  }

  ngOnInit(): void {
    this.dataService.getActivePodcastData().then(res => { this.currentPodcastData = res;

      this.currentPodcastData.items.forEach(elem => {
        console.log('prepping');
        let track = this.audioProvider.create(elem);
        this.audioProvider.add(track);
      });

    }, err => { this.error = err; })
  }

  onItemClicked(idx: number) : void {
    this.stopSelected();
    this.currentSelected = idx;
    this.playSelected();
    }

  playSelected() : void {
    this.audioProvider.current
    this.audioProvider.play(this.currentSelected);
  }

  stopSelected() : void {
    this.audioProvider.stop(this.currentSelected);
  }

  currentTrack() : any  {
    return this.audioProvider.tracks[this.audioProvider.current];
  }

  skipAhead() : void {
    let currentTrack = this.currentTrack();
    var progress = currentTrack.progress;
    currentTrack.seekTo(progress + 30);
  }

  skipBack() : void {
    let currentTrack = this.currentTrack();
    var progress = currentTrack.progress;
    currentTrack.seekTo(progress - 30);

  }

}
