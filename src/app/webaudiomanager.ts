declare let window;
window.AudioContext = window['AudioContext'] || window['webkitAudioContext'];

export class AudioManager {
    private audio : HTMLAudioElement;
    private pendingPlayRequest : boolean = false;
    private postponedLoadingRequest : string;

    constructor() {
        this.audio = new Audio();
        this.audio.addEventListener("timeupdate", this.onTimeUpdate.bind(this), false);
        this.audio.addEventListener("error", this.onError.bind(this), false);
        this.audio.addEventListener("canplay", this.onCanPlay.bind(this), false);
        this.audio.addEventListener("playing", this.onPlaying.bind(this), false);
        this.audio.addEventListener("ended", this.onEnded.bind(this), false);
        this.audio.addEventListener("durationchange", this.onDurationChange.bind(this), false);
    }

    public loadTrack(url : string) {
        if(this.postponedLoadingRequest || this.pendingPlayRequest) {
            this.postponedLoadingRequest = url;
            return;
        }

        this.audio.src=url;
        this.audio.load();
    }

    public play() {
        this.pendingPlayRequest = true;
        this.audio.play();
    }

    public pause() {
        this.audio.pause();
    }

    public seekTo(time: number) {
        this.audio.currentTime = time;
    }

    public get progress() {
        return this.audio.currentTime;
    }

    private onTimeUpdate(e: Event) {
        console.log('onTimeUpdate and audio = ', this.audio.src);
    }

    private onError(e: Event) {
        console.log('onError and audio = ', this.audio.src);
    }

    private onCanPlay(e: Event) {
        console.log('onCanPlay and audio = ', this.audio.src);
    }

    private onPlaying(e: Event) {
        console.log('onPlaying and audio = ', this.audio.src);
        if(this.pendingPlayRequest && this.postponedLoadingRequest) {
            this.loadTrack(this.postponedLoadingRequest);
            this.postponedLoadingRequest = null;
        }
        this.pendingPlayRequest=false;
    }

    private onEnded(e: Event) {
        console.log('onEnded and audio = ', this.audio.src);
    }

    private onDurationChange(e: any) {
        console.log('onDurationChange and audio = ', this.audio.src);
    }


}