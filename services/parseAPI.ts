import axios from "axios";

const headers = {
  'X-Parse-Application-Id': process.env.PARSE_APP_ID,
  'X-Parse-REST-API-Key': process.env.PARSE_REST_KEY,
}

const mountHeaders = (token?: string, customHeaders: any = {}) =>
  token ?
    {
      ...headers,
      ...customHeaders,
      'X-Parse-Session-Token': token
    }
    : {
      ...headers,
      ...customHeaders
    }

const parseAPI = {
  post: (url: string, data: any, token?: string, customHeaders: any = {}) => axios({
    method: 'post',
    url: `https://parseapi.back4app.com/${url}`,
    data,
    headers: mountHeaders(token, customHeaders)
  }),

  get: async (url: string, queryString?: string | null, token?: string, customHeaders: any = {}) => await axios({
    method: 'get',
    url: `https://parseapi.back4app.com/${url}${!!queryString ? '?' + queryString : ''}`,
    //data: queryString,
    headers: mountHeaders(token, customHeaders)
  })
}

export default parseAPI