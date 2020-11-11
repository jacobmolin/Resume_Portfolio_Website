// import Head from 'next/head'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'
// import Link from 'next/Link'
// import Layout from '../components/layout'
// import HorizontalTimeline from 'react-horizontal-timeline'
const name = 'Jacob Molin'

function Home() {
  return (
    // <>
    <div className={styles.container}>
      <div className={styles.imgName}>
        <div className={utilStyles.borderCircleParent}>
          <img src="images/profile.jpg"
            className={`${styles.headerImage} ${utilStyles.borderCircle}`}
            // ${utilStyles.borderCircle}
            // style={{ margin: "0 2rem" }}
            alt={name}
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Hi, I'm Jacob!</h1>
          <div className={styles.introText}>
            <div> I'm studying for a degree in Master of Science in Media Technology and Engineering.</div>
            <div> Have a look at my resume and my projects in my portfolio!</div>
          </div>
        </div>
      </div>
    </div>
    // </>
  )
}

export default Home