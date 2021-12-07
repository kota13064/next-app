import type { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../src/components/layout'

const NotFound: NextPage = () => {
    return (
        <Layout title="404" description="404 not found">
            <h1>ページが見つかりません</h1>
            <Link href='/'>
                <a>ホーム</a>
            </Link>
        </Layout>
    )
}

export default NotFound