import { Fetch, Params } from "./fetch";

const LOCAL_URL = "/api/";

type Endpoint = "local" | string;

export class Search extends Fetch {
  constructor(endpoint: Endpoint, params: Params = {}) {
    const BASE_URL = endpoint === "local" ? LOCAL_URL : "";
    super(params, BASE_URL, endpoint);
  }
}
