import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Navbar from './navbar'
import Drawer from './drawer'
import useWindowSize from '../utils/useWindowSize.js'
import { useEffect, useState } from 'react'
// import { Drawer } from '@material-ui/core'
// importera Router för info om var du är

// const name = "Jacob"
export const siteTitle = 'Jacob Molin'



function Layout({ children, home }) {
    const { width } = useWindowSize()
    const widthLimit = 800

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
            {(width > widthLimit) ? (
                <Navbar />
            ) : (
                    <Drawer />
                )}
            <main className={styles.main}>{children}</main>
            <footer className={styles.footer}>
                <div className={styles.copyright}>© Jacob Molin</div>
                <Link href="mailto: jacob.cb.molin@gmail.com">
                    <a>Contact</a>
                </Link>
            </footer>
        </div>
    )
}
export default Layout
