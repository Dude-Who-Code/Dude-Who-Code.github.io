import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/index.module.scss'
import DudeWhoCodeLogo from '../assets/images/dudewhocode.png'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dude Who Code</title>
        <meta name="description" content="This is a page for dudes who can code" />
        <link rel="icon" href="/dwc.ico" />
      </Head>

      <main className={styles.main}>
        <h1>We are coming soon!</h1>
        <Image src={DudeWhoCodeLogo} alt="Dude Who Code Logo" />
      </main>

      <footer className={styles.footer}>
        All rights reserved Dude Who Code 2022
      </footer>
    </div>
  )
}

export default Home
