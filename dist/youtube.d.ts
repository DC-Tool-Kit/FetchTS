import { Fetch, FetchData, Params } from "./fetch";
type Query = string;
export type HttpEndpoint = "videos" | "search" | string;
export type YoutubeParams = Params<{
    key: string;
    q?: Query;
    chart?: "mostPopular";
    regionCode?: "US" | "IN";
}>;
type Thumbnail = {
    url: string;
    width: number;
    height: number;
};
export type SearchResult = {
    title: string;
    videoId: string;
    channelId: string;
    channelTitle: string;
    description: string;
    publishTime: string;
    publishedAt: string;
    thumbnails: {
        default: Thumbnail;
        high: Thumbnail;
        medium: Thumbnail;
    };
};
export type QueryData = FetchData<SearchResult[]>;
export declare class YoutubeApi extends Fetch {
    constructor(query: Query, params: YoutubeParams, endpoint: HttpEndpoint);
    results(): QueryData;
}
/**
 *
 * @param query what are you search for?
 * @param params must pass api key as param
 * @returns Search results
 */
export declare const youtube: (query: Query, params?: YoutubeParams) => Promise<SearchResult[]>;
export {};
