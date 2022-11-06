"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.youtube = exports.YoutubeApi = void 0;
const fetch_1 = require("./fetch");
const BASE_URL = "https://www.googleapis.com/youtube/v3/";
class YoutubeApi extends fetch_1.Fetch {
    constructor(query, params, endpoint) {
        params.q = query;
        params.part = "snippet";
        super(params, BASE_URL, endpoint);
    }
    results() {
        return __awaiter(this, void 0, void 0, function* () {
            const { items } = (yield this.data());
            return items.map((item) => {
                const res = Object.assign({ videoId: item.id.videoId, thumbnail: item.snippet.thumbnails.high.url }, item.snippet);
                return res;
            });
        });
    }
}
exports.YoutubeApi = YoutubeApi;
/**
 *
 * @param query
 * @param endpoint
 * @param params must pass api key as param
 * @returns Search results
 */
const youtube = (query, endpoint = "search", params = { key: '<GOOGLE_API_KEY>', maxResults: 8 }) => __awaiter(void 0, void 0, void 0, function* () {
    const yt = new YoutubeApi(query, params, endpoint);
    return yield yt.results();
});
exports.youtube = youtube;
