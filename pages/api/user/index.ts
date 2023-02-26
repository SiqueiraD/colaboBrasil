// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from 'lib/session'
import { NextApiRequest, NextApiResponse } from 'next'
import parseAPI from '@/services/parseAPI'

export type User = {
  sessionToken: string
  username: string
  objectId: string
}

async function userRoute(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  //const loggedInUser = await Parse.User.logIn(req.body.usernameValue, req.body.passwordValue);
  //const sessionUser = await parseAPI.get('users/me', null, undefined, {'X-Parse-Session-Token': req.body.token})

  if (req.session.user) {
    res.json({
      ...req.session.user,
    })
  } else {
    res.json({ sessionToken: '', username : '', objectId: '' })
  }
}

export default withIronSessionApiRoute(userRoute, sessionOptions)
