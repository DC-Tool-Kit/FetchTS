import { AxiosInstance } from "axios";
export interface RequestParams {
    part?: "snippet";
    maxResults?: number;
}
export type Params<T = any> = RequestParams & {
    [k in keyof T]: T[k];
};
interface Result {
    data: any;
    status: number;
}
export type FetchData<T = any> = Promise<T>;
export interface IFetch {
    api: AxiosInstance;
    endpoint: string;
    base_url: string;
    params: Params;
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
