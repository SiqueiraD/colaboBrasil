// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios, { AxiosResponse } from 'axios'
import parseAPI from '@/services/parseAPI'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const criarUsuario = await parseAPI.post('users', {username: req.body.usernameValue, password: req.body.passwordValue}, undefined, {
        'X-Parse-Revocable-Session': 1,
        'Content-Type':'application/json'
    });

    res.status(200).json(criarUsuario.data ?? 'nao foi possivel')
}
