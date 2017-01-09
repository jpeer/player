import {Component, Input, DoCheck} from '@angular/core'
import {IAudioManager} from "../../providers/audiomanager";

@Component({
    selector: 'progress-bar',
    template: `
    <ion-range [(ngModel)]="range" min="0" max="100" (ionChange)="seekTo()" name="progress" ngDefaultControl>
      <time range-left>{{audioManager.progress | audioTime}}</time>
      <time range-right>{{audioManager.duration | audioTime}}</time>
    </ion-range>
    `
})
export class ProgressBar implements DoCheck {

    @Input()
    audioManager: IAudioManager;
    range: number = 0;

    ngDoCheck() {
        this.range = Math.round(this.audioManager.progressPct * 100) / 100;
    }

    seekTo() {
        let gotoProgress = this.range * this.audioManager.duration / 100;
        this.audioManager.seekTo(gotoProgress);
    }

}