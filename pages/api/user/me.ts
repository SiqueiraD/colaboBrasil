// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import parseAPI from '@/services/parseAPI'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  //const loggedInUser = await Parse.User.logIn(req.body.usernameValue, req.body.passwordValue);
  const sessionUser = await parseAPI.get('users/me', null, undefined, {'X-Parse-Session-Token': req.body.token})
  
  res.status(200).json(sessionUser.data ?? 'nao foi possivel')
}
