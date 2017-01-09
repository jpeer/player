import {Injectable} from "@angular/core";

@Injectable()
export abstract class IAudioManager {

    progress: number;
    progressPct: number;
    duration : number;

    loadTrack(url: string){};
    play(){};
    pause(){};
    seekTo(time: number){} ;

}
