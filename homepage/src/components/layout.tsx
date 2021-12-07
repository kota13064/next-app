import React, { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
 
type Props = {
    children?: React.ReactNode
    title?: string
    description?: string
}
 
const Layout = ({ children, title = 'タイトル', description }: Props) => (
    <div className={styles.container}>
        <Head>
            <title>{ title }</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content={ description || '概要' } />
        </Head>
        <header>
            <h1>{ title }</h1>
            <nav>
                <Link href="/">
                  <a>Home</a>
                </Link>{' '}
                |{' '}
                <Link href="/about">
                  <a>About</a>
                </Link>{' '}
            </nav>
        </header>
        <main className={styles.main}>
            { children }
        </main>
        <footer className={styles.footer}>
            <hr />
            <span>I'm here to stay (Footer)</span>
        </footer>
    </div>
)

export default Layout