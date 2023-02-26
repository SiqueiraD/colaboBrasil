import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import useUser from '@/lib/useUser'
import { Grid } from '@mui/material'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { user } = useUser()
  return (
    <>
      <Head>
        <title>App Colabora Brasil!</title>
        <meta name="description" content="Mapa colaborativo para estudos sobre Brasil" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <main className={styles.main}>
            {!!user?.username && (<div>oi, {user.username}</div>)}
            {children}
          </main>
        </Grid>
      </Grid>
    </>
  )
}