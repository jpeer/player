export interface IPodcastData {
    metadata: IPodcast;
    tracks: ITrack[];
}

export interface IPodcast {
    feed: string; // the RSS URL
    title: string;
    picUrl?: string;
};

export interface ITrack {
    link: string; // logical ID (URI) of track
    src: string; // concrete location (URL) of media file
    title: string;
    picUrl?: string;
}

export interface IBookmark {
    positions: number[];
    metadata: ITrack;
}