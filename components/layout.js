import Head from 'next/head'
import styles from './layout.module.css'
import Navbar from './navbar'
// import Drawer from './drawer'
// importera Router för info om var du är

export const siteTitle = 'Jacob Molin'



function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>{siteTitle}</title>
                {/* <link rel="icon" href="/favicon.ico" /> */}
                <meta
                    name="description"
                    content="Jacob Molin"
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            {/* {(width > widthLimit) ? ( */}
            <Navbar />
            {/* ) : (
                    <Drawer />
            )} */}
            <main className={styles.main}>{children}</main>
            <footer className={styles.footer}>
                <div className={styles.copyright}>© Jacob Molin</div>
                {/* <Link href="mailto: jacob.cb.molin@gmail.com">
                    <a>Contact</a>
                </Link> */}
            </footer>
        </div>
    )
}
export default Layout
