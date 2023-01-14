import { __awaiter } from './_virtual/_tslib.js';

// import youtubedl from "youtube-dl-exec";
const youtubedl = (...params) => { };
const download = (url) => __awaiter(void 0, void 0, void 0, function* () {
    return yield youtubedl(url, {
        dumpSingleJson: true,
        noCheckCertificates: true,
        noWarnings: true,
        preferFreeFormats: true,
        addHeader: ["referer:youtube.com", "user-agent:googlebot"],
    });
});

export { download };
//# sourceMappingURL=download.js.map
