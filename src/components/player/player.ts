import {Component, Input} from '@angular/core';
import {IAudioManager} from "../../providers/audiomanager";

@Component({
  selector: 'player',
  templateUrl: 'player.html'
})
export class PlayerComponent {

  private _currentItem : any = null;

  constructor(private audioManager: IAudioManager) {
  }

  @Input()
  set currentItem(item) {
    if (item === null) { return; }

    if (this._currentItem !== null && this._currentItem.link === item.link) {
      this.audioManager.seekTo(0);
      return;
    }
    this._currentItem = item;
    this.audioManager.loadTrack(item.src);
    this.audioManager.play();
  }

  get currentItem() : any {
    return this._currentItem;
  }

  onPlay(): void {
    this.audioManager.play();
  }

  onPause(): void {
    this.audioManager.pause();
  }

  skipAhead(): void {
    var progress = this.audioManager.progress;
    this.audioManager.seekTo(progress + 30);
  }

  skipBack(): void {
    var progress = this.audioManager.progress;
    this.audioManager.seekTo(progress - 30);
  }

}
