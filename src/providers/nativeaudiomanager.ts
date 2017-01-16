import { IAudioManager } from './audiomanager';
import {MediaPlugin} from "ionic-native";
import {Injectable} from "@angular/core";

@Injectable()
export class NativeAudioManager extends IAudioManager {
    private audio: MediaPlugin;
    private _progress: number;
    private src : string;
    private _timer : any;
    private _duration : number;
    private _progressPct: number;
    private _status: number = MediaPlugin.MEDIA_NONE;
    private _seekToRequest: number = -1;

    public loadTrack(url : string) {
        this.src = url;
        if(this.audio) {
            this.audio.stop();
            this.audio.release();
            this.audio = null;
        }
    }

    public play() {

        if (this._seekToRequest !== -1) {
            this._seekToRequest = -1;
        }

        if(this.audio) {
            this.audio.play({playAudioWhenScreenIsLocked: true});
            this.startTimer();
            return;
        }

        this.audio = new MediaPlugin(this.src, (status) => {
            if(this._status === MediaPlugin.MEDIA_RUNNING && this._seekToRequest !== -1) {
                this.audio.seekTo(this._seekToRequest * 1000);
                this._seekToRequest = -1;
            }
            this._status = status;
        });
        this.audio.play({playAudioWhenScreenIsLocked: true});
        this.startTimer();
    }

    public pause() {
        this.audio.pause();
        this.stopTimer();
    }

    /* expect in seconds */
    public seekTo(time: number) {
        console.log('seekto unvoked!', time, this._status);
        if(this._status !== MediaPlugin.MEDIA_RUNNING) {
            this._seekToRequest = time;
        } else {
            this.audio.seekTo(time * 1000);
        }
    }

    public get duration() {
        return this._duration;
    }

    /* return in seconds */
    public get progress() {
        return this._progress;
    }

    /* returns number between 0 and 100 */
    public get progressPct() {
        return this._progressPct;
    }

    private startTimer() {
        this._timer = setInterval(() => {
            if (this._duration===undefined || this._duration < 0) {
                this._duration = Math.round(this.audio.getDuration()*100)/100;
            }

            this._duration = this.audio.getDuration();
            this.audio.getCurrentPosition().then((pos) => {
                this ._progress=pos;
                this._progressPct=(this._progress/this._duration)*100;
            });

        }, 1000);
    }

    private stopTimer() {
        clearInterval(this._timer);
    }

}