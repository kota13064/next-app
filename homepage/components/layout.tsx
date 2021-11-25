import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
 
type Props = {
    children?: React.ReactNode
    title?: string
    description?: string
}
 
export default function Layout({ children, title, description }: Props) {
    const pageTitle = title || 'ホームページタイトル'
    return (
        <div className={styles.container}>
            <Head>
                <title>{ pageTitle }</title>
                <meta name="description" content={ description || 'ホームページ概要' } />
            </Head>
            <header>
                <h1>{ pageTitle }</h1>
            </header>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                </ul>
            </nav>
            <main className={styles.main}>
                { children }
            </main>
            <footer className={styles.footer}>
                &copy; Next.js Demo
                <a
                  href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Powered by{' '}
                  <span className={styles.logo}>
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                  </span>
                </a>
            </footer>
        </div>
    )
}