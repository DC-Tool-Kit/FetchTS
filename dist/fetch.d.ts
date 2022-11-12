import { AxiosInstance } from "axios";
export interface RequestParams {
    part?: "snippet";
    maxResults?: number;
}
export declare type Params<T = any> = RequestParams & {
    [k in keyof T]: T[k];
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
    api: AxiosInstance;
    data(): FetchData;
}
export declare class Fetch implements IFetch {
    params: Params;
    base_url: string;
    endpoint: string;
    constructor(params: Params, base_url: string, endpoint: string);
    data(): Promise<Result>;
    get api(): AxiosInstance;
}
export {};
