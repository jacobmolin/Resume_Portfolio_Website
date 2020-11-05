import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/Link'
import Layout from '../components/layout'
// import HorizontalTimeline from 'react-horizontal-timeline'

function Home() {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Jacob</h1>
      </main>
    </>
  )
}

export default Home