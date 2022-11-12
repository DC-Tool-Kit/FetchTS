import { __awaiter } from './_virtual/_tslib.js';
import { Fetch } from './fetch.js';

const BASE_URL = "https://www.googleapis.com/youtube/v3/";
class YoutubeApi extends Fetch {
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

export { YoutubeApi, youtube };
//# sourceMappingURL=youtube.js.map
