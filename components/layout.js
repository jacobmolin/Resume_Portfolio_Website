import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Navbar from './navbar'
// importera Router för info om var du är

// const name = "Jacob"
export const siteTitle = 'Jacob Molin'


export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>{siteTitle}</title>
                {/* <link rel="icon" href="/favicon.ico" />*/}
                <meta
                    name="description"
                    content="Jacob Molin"
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <Navbar></Navbar>

            <main className={styles.main}>{children}</main>

            <footer className={styles.footer}>
                <div>© Jacob Molin</div>
                <div><a href="mailto: jacob.cb.molin@gmail.com">Contact</a>
                </div>
            </footer>
        </div>
    )
}