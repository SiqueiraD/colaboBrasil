// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import parseAPI from '@/services/parseAPI'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  //const loggedInUser = await Parse.User.logIn(req.body.usernameValue, req.body.passwordValue);
  const loggedInUser = await parseAPI.get('login', 
  `username=${req.body.usernameValue}&password=${req.body.passwordValue}`)
  
  res.status(200).json(loggedInUser.data ?? 'nao foi possivel')
}
