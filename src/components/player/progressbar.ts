import {Component, Input, DoCheck} from '@angular/core'
import {NativeAudioManager} from "../../providers/nativeaudiomanager";

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
    audioManager: NativeAudioManager;
    range: number = 0;

    ngDoCheck() {
        this.range = Math.round(this.audioManager.progressPct * 100) / 100;
    }

    seekTo() {
        let gotoProgress = this.range * this.audioManager.duration / 100;
        this.audioManager.seekTo(gotoProgress);
    }

}