import type { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../src/components/layout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Layout title="ホームページ" description="ホームページ概要">
      <h1 className={styles.title}>
        kota13064のホームページ
      </h1>

      <div className={styles.grid}>
        <Link href="/about">
          <a className={styles.card}>
            <h2>For Recruiter &rarr;</h2>
            <p>これまでやったことや、スキルなど</p>
          </a>
        </Link>

        <a href="https://my-app-test-77e3f.web.app/" className={styles.card}>
          <h2>TODO app &rarr;</h2>
          <p>GCPのCloud storageとFirestoreを使い、Reactで作ったシンプルなTODOアプリ。Firebase Authenticationを使ってログインできる。</p>
        </a>

        <Link href="/microCmsBlog">
          <a className={styles.card}>
            <h2>ブログ &rarr;</h2>
            <p>ITや物理など</p>
          </a>
        </Link>
      </div>
    </Layout>
  )
}

export default Home
