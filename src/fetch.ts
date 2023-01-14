import axios, { AxiosInstance } from "axios";
// import axios, { AxiosResponse } from "../../../node_modules/axios/index";

// export type Params<T = {}> = {
//   [k in keyof T]: T[k];
// };

/**
 *
 * 4493 N Eastern St
 * 79108
 *
 */

export type Props = {
  endpoint: string;
  base_url: string;
  params: Object;
  headers: Object;
};

export const useAxios = async <T extends {}>(init: Props) => {
  const { endpoint, ...options } = init;
  const api = await axios.create(options).get<T>(endpoint);
  return api;
};

export interface RequestParams {
  part?: "snippet";
  maxResults?: number;
}

export type Params<T = any> = RequestParams &
  {
    [k in keyof T]: T[k];
  };

// yes this part

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

export class Fetch implements IFetch {
  params: Params;
  base_url: string;
  endpoint: string;

  constructor(params: Params, base_url: string, endpoint: string) {
    this.params = params;
    this.base_url = base_url;
    this.endpoint = endpoint;
  }

  async data() {
    const { data } = await this.api.get<Result>(this.endpoint);
    return data;
  }

  get api() {
    return axios.create({
      baseURL: this.base_url,
      params: this.params,
      headers: {},
    });
  }
}
