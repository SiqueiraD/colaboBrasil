import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>App Colabora Brasil!</title>
        <meta name="description" content="Mapa colaborativo para estudos sobre Brasil" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="container">{children}</div>
      </main>
    </>
  )
}