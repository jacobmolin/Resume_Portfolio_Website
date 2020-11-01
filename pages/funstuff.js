import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export const site = 'Fun stuff'

export default function FunStuff() {
    return (
        <>
            <Head>
                <title>{site}</title>
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>{site}</h1>
            </main>
        </>
    )
}