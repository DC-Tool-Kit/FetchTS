declare type _Params = {
    part?: "snippet";
    maxResults?: number;
};
export declare type Params<T = any> = _Params & {
    [P in keyof T]: T[P];
};
interface Result {
    data: any;
    status: number;
}
export declare type FetchData<T = any> = Promise<T>;
export interface IFetch {
    params: Params;
    endpoint: string;
    base_url: string;
    data(): FetchData;
}
export declare class Fetch implements IFetch {
    params: Params;
    base_url: string;
    endpoint: string;
    constructor(params: Params, base_url: string, endpoint: string);
    data(): Promise<Result>;
    get api(): import("axios").AxiosInstance;
}
export {};
