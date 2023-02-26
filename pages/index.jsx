import Head from 'next/head'
import { Formik } from 'formik'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React, { useState } from 'react';
import axios from 'axios';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [signUp, setSignUp] = useState(0);

  const fazerLogin = async function (a) {
    // Note that these values come from state variables that we've declared before
    const usernameValue = a.username;
    const passwordValue = a.password;
    const userAuthen = await (await axios.post('/api/user/auth', { usernameValue, passwordValue })).data
    console.log(userAuthen)
    if (!!userAuthen)
      window.location.href = `/app/${userAuthen.sessionToken}`
  };

  const cadastrarNovo = async function (a) {
    // Note that these values come from state variables that we've declared before
    const usernameValue = a.username;
    const passwordValue = a.password;
    const userAuthen = await (await axios.post('/api/user/access', { usernameValue, passwordValue })).data
    console.log(userAuthen)
  };

  return (
    <>
      <Head>
        <title>Colabo Brasil</title>
        <meta name="description" content="Mapa colaborativo para estudos sobre Brasil" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            {!!signUp ? 'Se já tem conta, faça o ' : 'Não tem conta ainda? '}
          <button onClick={() => setSignUp(!signUp)}>{!!signUp ? 'Login' : 'Cadastre-se'}</button>
          </p>
        </div>

        <div>
          <div className="container">
            <h2 className="heading">{!!signUp ? 'Cadastrar' : 'Entrar'}</h2>
            {!!signUp ?
              (
                <Formik initialValues={{ username: 'blabla', password: '123' }} onSubmit={cadastrarNovo}>
                  {({
                    values,
                    handleChange,
                    handleSubmit
                  }) => {
                    return (
                      <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Nome de usuário: </label>
                        <input type="text" id="username" name="username" onChange={handleChange} />
                        <br />
                        <label htmlFor="password">Senha: </label>
                        <input type="password" id="password" name="password" onChange={handleChange} />
                        <br />
                        <button type="submit">Salvar</button>
                      </form>)
                  }}
                </Formik>) :
              (
                <Formik initialValues={{ username: '123', password: '123' }} onSubmit={fazerLogin}>
                  {({
                    values,
                    handleChange,
                    handleSubmit
                  }) => {
                    return (
                      <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Nome de usuário</label>
                        <input type="text" id="username" name="username" onChange={handleChange} />
                        <br />
                        <label htmlFor="password">Senha: </label>
                        <input type="password" id="password" name="password" onChange={handleChange} />
                        <br />
                        <button type="submit">Login</button>
                      </form>)
                  }}
                </Formik>)}
          </div>
        </div>

        <div className={styles.grid}>
        </div>
      </main>
    </>
  )
}
