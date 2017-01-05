import {Component, OnInit} from '@angular/core';

import { NavController } from 'ionic-angular';
import {DataService} from "../../providers/data-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {


  currentPodcastData : any;
  error: string;
  currentSelected: number = 0;

  constructor(public navCtrl: NavController, private dataService : DataService) {
  }

  ngOnInit(): void {
    this.dataService.getActivePodcastData().then(res => { this.currentPodcastData = res; }, err => { this.error = err; })
  }

  onItemClicked(idx: number) : void {
    this.currentSelected = idx;
    console.log('onClicked('+idx+')');
  }

  playSelected() : void {}

  stopSelected() : void {}

}
