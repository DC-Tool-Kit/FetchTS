import { __awaiter } from './_virtual/_tslib.js';
import * as youtube from './youtube.js';
export { youtube };
import * as download from './download.js';
export { download };
import * as fetch$1 from './fetch.js';
export { fetch$1 as fetch };

/**
 *
 * @param url API endpoint
 * @param data Object to passed into body of post request
 * @param method GET, POST, PUT, DELETE, etc.
 * @returns Promise or error
 */
function postData(url, data = {}, method = "POST") {
    return __awaiter(this, void 0, void 0, function* () {
        const values = Object.values(data).filter(Boolean).length;
        if (values == 0)
            return { error: "empty_values" };
        const response = yield fetch(url, {
            method,
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    });
}

export { postData as default };
//# sourceMappingURL=index.js.map
