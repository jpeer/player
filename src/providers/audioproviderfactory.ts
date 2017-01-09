import {NativeAudioManager} from "./nativeaudiomanager";
import {WebAudioManager} from "./webaudiomanager";

export function audioProviderfactory() {
    return window.hasOwnProperty('cordova') ? new NativeAudioManager() : new WebAudioManager();
}
