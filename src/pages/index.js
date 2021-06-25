import Head from 'next/head'
import Layout from '../components/layout'

import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <Layout>

      <Head>
        <title>Viking Gaming</title>
      </Head>


      <h1 className={styles.title}>Home</h1>
    </Layout>
  )
}
