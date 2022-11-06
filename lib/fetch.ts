import axios from "axios"

// how can this be better
type _Params = {
  part?: "snippet"
  maxResults?: number
}

export type Params<T = any> = _Params & {
  [P in keyof T]: T[P]
}

// yes this part

interface Result {
  data: any
  status: number
}


export type FetchData<T = any> = Promise<T>

export interface IFetch {
  params: Params
  endpoint: string
  base_url: string
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
