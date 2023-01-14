export type query = string;
export type Endpoint = "videos" | "search" | string;
/**
 *
 * Pass this in when calling api
 *
 */
export type Params = {
    q?: query;
    chart?: "mostPopular";
    regionCode?: "US" | "IN";
};
/**
 *
 * How data from the api call should return
 *
 */
export type ResponseItem = {
    id: {
        kind: string;
        videoId: string;
    };
    snippet: any;
};
export type Thumbnail = {
    url: string;
    width: number;
    height: number;
};
/**
 *
 * The base format for using in a component
 *
 */
export interface Result {
    kind: string;
    title: string;
    videoId: string;
    channelId: string;
    channelTitle: string;
    description: string;
    publishTime: string;
    publishedAt: string;
    liveBroadcastContent: string;
    thumbnails: {
        default: Thumbnail;
        high: Thumbnail;
        medium: Thumbnail;
    };
}
