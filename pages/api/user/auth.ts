import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from 'lib/session'
import { NextApiRequest, NextApiResponse } from 'next'
import parseAPI from '@/services/parseAPI'
import { User } from '@/pages/api/user'

async function loginRoute(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  //const loggedInUser = await Parse.User.logIn(req.body.usernameValue, req.body.passwordValue);
  const loggedInUser = await parseAPI.get('login', 
  `username=${req.body.usernameValue}&password=${req.body.passwordValue}`)
  const user: User = loggedInUser.data
  req.session.user = user
  await req.session.save()
  
  res.status(200).json(loggedInUser.data ?? 'nao foi possivel')
}

export default withIronSessionApiRoute(loginRoute, sessionOptions)
