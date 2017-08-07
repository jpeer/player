import {Component, OnInit} from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';
import {DataService} from "../../providers/data-service";
import {LoginServiceProvider} from "../../providers/login-service/login-service";
import {IAudioManager} from '../../providers/audiomanager';
import {IPodcast} from "../../providers/podcast";
import {PlayerPage} from "../player/player";


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage implements OnInit {

    currentPodcast: IPodcast;
    currentPodcastData: any;
    error: string;

    constructor(public navCtrl: NavController, params: NavParams, private dataService: DataService,
                private audioManager: IAudioManager, private loginService: LoginServiceProvider) {
        this.currentPodcast = params.data.podcast;
    }

    ngOnInit(): void {
        this.dataService.getPodcastData(this.currentPodcast.feed).then(res => {
            this.currentPodcastData = res;
        }, err => {
            this.error = err;
        });

        this.loginService.isLoggedIn().then(isLoggedIn => {
           if(isLoggedIn) {
               console.log('cool, you are logged in');
           } else {
               console.log('well well well, you are not logged in')
           }
        });
    }

    onItemClicked(idx: number): void {
        this.navCtrl.push(PlayerPage, { track : this.currentPodcastData.items[idx]});
    }


}
