import type { NextPage } from 'next'
import { signIn, signOut, useSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>OAuth Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">OAuth Example</a>
        </h1>

        <p className={styles.description}>
          Use GitHub OAuth to authenticate
        </p>

        <LoginComponent />
      </main>
    </div>
  )
}

export default Home


function LoginComponent() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session?.user?.name} <br />
        <button className="btn btn-primary" onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button className="btn btn-primary" onClick={() => signIn("github")}>Sign in to Github <img width="25" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GH" /></button>
    </>
  )
}