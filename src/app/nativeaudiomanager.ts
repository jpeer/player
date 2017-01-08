import { IAudioManager } from './audiomanager';
import {MediaPlugin} from "ionic-native";

export class NativeAudioManager implements IAudioManager {
    private audio: MediaPlugin;
    private _progress: number;
    private src : string;
    private _timer : any;
    private _duration : number;

    public loadTrack(url : string) {
        this.src = url;
        if(this.audio) {
            this.audio.stop();
            this.audio.release();
            this.audio = null;
        }
    }

    public play() {
        if(this.audio) {
            this.audio.play({playAudioWhenScreenIsLocked: true});
            this.startTimer();
            return;
        }

        console.log('native audio manager!');

        this.audio = new MediaPlugin(this.src);
        this.audio.play({playAudioWhenScreenIsLocked: true});
        this.startTimer();
    }

    public pause() {
        this.audio.pause();
        this.stopTimer();
    }

    /* expect in seconds */
    public seekTo(time: number) {
        this.audio.seekTo(time * 1000);
    }

    public get duration() {
        return this._duration;
    }

    /* return in seconds */
    public get progress() {
        return this._progress;
    }

    private startTimer() {
        this._timer = setInterval(() => {
            if (this._duration===undefined || this._duration < 0) {
                this._duration = Math.round(this.audio.getDuration()*100)/100;
            }

            this._duration = this.audio.getDuration();
            this.audio.getCurrentPosition().then((pos) => {this ._progress=pos; console.log('pos=', pos);});

        }, 1000);
    }

    private stopTimer() {
        clearInterval(this._timer);
    }

}