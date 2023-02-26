import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from 'lib/session'
import { NextApiRequest, NextApiResponse } from 'next'
import axios, { AxiosResponse } from 'axios'
import parseAPI from '@/services/parseAPI'
import { User } from '@/pages/api/user'

async function signUpRoute(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const criarUsuario = await parseAPI.post('users', {username: req.body.usernameValue, password: req.body.passwordValue}, undefined, {
        'X-Parse-Revocable-Session': 1,
        'Content-Type':'application/json'
    });
    const user: User = criarUsuario.data
    req.session.user = user
    await req.session.save()

    res.status(200).json(criarUsuario.data ?? 'nao foi possivel')
}

export default withIronSessionApiRoute(signUpRoute, sessionOptions)