export interface IAudioManager {

    progress: number;
    duration : number;

    loadTrack(url: string);
    play();
    pause();
    seekTo(time: number) ;


}