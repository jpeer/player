import {Media, MediaObject} from "@ionic-native/media";

export class MediaObjectMock extends MediaObject {
    constructor() {
        super(null);
    }
}

export class MediaMock extends Media {

    create(src: string): MediaObject {
        return new MediaObjectMock();
    }
}