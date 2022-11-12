# `fetch`

> TODO: description

## Usage

```
import { YoutubeApi, youtube, YoutubeParams, HttpEndpoint } from '@dcat/fetch'

// TODO: DEMONSTRATE API
const key = process.env.REACT_APP_GOOGLE_API_KEY as string
const params: YoutubeParams = { key, maxResults: 5 }
const query = 'naruto'
const endpoint: HttpEndpoint = 'search'

const yt = new YoutubeApi(query, params, endpoint)
let results = await yt.results()
let results2 = await youtube(query, params, endpoint)

console.log(results == results2) // true
```
