export const BASE_URL = "https://www.googleapis.com/youtube/v3/";
export const WATCH_URL = "https://www.youtube.com/watch?v=";
export * as types from "./types";

import { Fetch, FetchData, Params, RequestParams } from "../fetch";

type Query = string;
export type HttpEndpoint = "videos" | "search" | string;

export type YoutubeParams = Params<{
  key: string;
  q?: Query;
  chart?: "mostPopular";
  regionCode?: "US" | "IN";
}>;

type Item = {
  id: { videoId: string };
  snippet: any;
};

type Result = {
  items: Item[];
};

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
  thumbnails: { default: Thumbnail; high: Thumbnail; medium: Thumbnail };
};

export type QueryData = FetchData<SearchResult[]>;

export class YoutubeApi extends Fetch {
  constructor(query: Query, params: YoutubeParams, endpoint: HttpEndpoint) {
    params.q = query;
    params.part = "snippet";
    super(params, BASE_URL, endpoint);
  }

  async results(): QueryData {
    const { items } = (await this.data()) as unknown as Result;
    return items.map((item) => {
      const res: SearchResult = {
        videoId: item.id.videoId,
        ...item.snippet,
      };
      return res;
    });
  }
}

/**
 *
 * @param query what are you search for?
 * @param params must pass api key as param
 * @returns Search results
 */
export const youtube = async (
  query: Query,
  // endpoint: HttpEndpoint = "search",
  params: YoutubeParams = { key: "<GOOGLE_API_KEY>", maxResults: 8 }
) => {
  const yt = new YoutubeApi(query, params, "search");
  return await yt.results();
};
