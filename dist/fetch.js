import { __awaiter } from './_virtual/_tslib.js';
import axios from 'axios';

class Fetch {
    constructor(params, base_url, endpoint) {
        this.params = params;
        this.base_url = base_url;
        this.endpoint = endpoint;
    }
    data() {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.api.get(this.endpoint);
            return data;
        });
    }
    get api() {
        return axios.create({
            baseURL: this.base_url,
            params: this.params,
            headers: {},
        });
    }
}

export { Fetch };
//# sourceMappingURL=fetch.js.map
