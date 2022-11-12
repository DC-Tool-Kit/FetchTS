import axios, { AxiosInstance } from "axios"

// how can this be better

// type _Params = {
//   part?: "snippet"
//   maxResults?: number
// }

export interface RequestParams {
  part?: "snippet"
  maxResults?: number
}

export type Params<T = any> = RequestParams & {
  [k in keyof T]: T[k]
}

// yes this part

interface Result {
  data: any
  status: number
}

export type FetchData<T = any> = Promise<T>

export interface IFetch {
  api: AxiosInstance
  endpoint: string
  base_url: string
  params: Params
  data(): FetchData
}

export class Fetch implements IFetch {
  params: Params
  base_url: string
  endpoint: string

  constructor(params: Params, base_url: string, endpoint: string) {
    this.params = params
    this.base_url = base_url
    this.endpoint = endpoint
  }

  async data() {
    const { data } = await this.api.get<Result>(this.endpoint)
    return data
  }

  get api() {
    return axios.create({
      baseURL: this.base_url,
      params: this.params,
      headers: {},
    })
  }
}
