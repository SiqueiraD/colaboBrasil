// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios, { AxiosResponse } from 'axios'
import parseAPI from '@/services/parseAPI'

type Data = {
  statusCode: number
  body: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log('PARSE_APP_ID: ')
  console.log(process.env.PARSE_APP_ID)
  console.log('PARSE_REST_KEY: ')
  console.log(process.env.PARSE_REST_KEY)
  // const response = await axios
  //     .request({
  //       url: `https://api.agify.io?name=michael`,
  //       method: 'get',
  //     })
  //     .then((resp: AxiosResponse) => ({
  //       statusCode: resp.status,
  //       body: resp.data,
  //     }))
  //     .catch((error: any) => ({
  //       statusCode: error.response.status,
  //       body: error.response.data,
  //     }))
  const response = await parseAPI.post('users', { username: 'username', password: '123' }, undefined, {
    'X-Parse-Revocable-Session': 1,
    'Content-Type': 'application/json'
  })
    .then((resp: AxiosResponse) => ({
      statusCode: resp.status,
      body: resp.data,
    }))
    .catch((error: any) => ({
      statusCode: error.response.status,
      body: error.response.data,
    }))

  res.status(200).json(response)
}
