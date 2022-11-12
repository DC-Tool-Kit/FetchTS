import { Fetch, FetchData, Params } from "./fetch";
declare type Query = string;
export declare type HttpEndpoint = "videos" | "search" | string;
export declare type YoutubeParams = Params<{
    key: string;
    q?: Query;
    chart?: "mostPopular";
    regionCode?: "US" | "IN";
}>;
export declare type SearchResult = {
    title?: string;
    videoId?: string;
    channelId?: string;
    channelTitle?: string;
    description?: string;
    publishTime?: string;
    publishedAt?: string;
    thumbnail?: string;
};
export declare type QueryData = FetchData<SearchResult[]>;
export declare class YoutubeApi extends Fetch {
    constructor(query: Query, params: YoutubeParams, endpoint: HttpEndpoint);
    results(): QueryData;
}
/**
 *
 * @param query
 * @param endpoint
 * @param params must pass api key as param
 * @returns Search results
 */
export declare const youtube: (query: Query, endpoint?: HttpEndpoint, params?: YoutubeParams) => Promise<SearchResult[]>;
export {};
