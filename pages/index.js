// import Head from 'next/head'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'
// import Link from 'next/Link'
// import Layout from '../components/layout'
// import HorizontalTimeline from 'react-horizontal-timeline'
const name = 'Jacob Molin'

function Home() {
  return (
    <>
      <main className={styles.main}>
        <img src="images/profile.jpeg"
          className={`${styles.headerImage} ${utilStyles.borderCircle}`}
          alt={name}
        />
        <h1 className={styles.title}>Hi, I'm Jacob!</h1>
        <p>I'm studying for a degree in Master of Science in Media Technology and Engineering</p>
      </main>
    </>
  )
}

export default Home