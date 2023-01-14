import { Fetch, Params } from "./fetch";
type Endpoint = "local" | string;
export declare class Search extends Fetch {
    constructor(endpoint: Endpoint, params?: Params);
}
export {};
