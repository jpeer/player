export interface IAudioManager {

    progress: number;
    progressPct: number;
    duration : number;

    loadTrack(url: string);
    play();
    pause();
    seekTo(time: number) ;


}