import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/Link'
import Layout from '../components/layout'
// import HorizontalTimeline from 'react-horizontal-timeline'
// import { useState } from 'react';



export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Jacob</h1>
      </main>
    </Layout>
  )
}
// <div className={styles.container}>
// <Head>
//         <title>Jacob Molin</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

{/* <header className={styles.header}>
          <a href="/">
            Resume
        </a>
          <Link href="/portfolio.js">
            <a>
              Portfolio
        </a>
          </Link>
          <a href="/">
            Fun stuff
        </a>
        </header> */}

{/* <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Jacob</h1> */}
{/* 
          <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>pages/index.js</code>
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h3>Learn &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={styles.card}
            >
              <h3>Examples &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h3>Deploy &rarr;</h3>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
            </a>
          </div> */}
{/* </main> */ }


{/* </div> */ }
    // </Layout >
//   )
// }


// const VALUES = ['1990-07-03', '1992-09-23', '1994-08-21', '1996-07-03', '1997-09-23', '1998-08-21'];
// const [currIndex, setCurrIndex] = useState(0);
// <div style={{ width: '100%' }}>
//   {/* Bounding box for the Timeline */}
//   <div style={{ width: '100%', height: '100px', margin: '0 auto' }}>
//     <HorizontalTimeline
//       index={currIndex}
//       indexClick={(index) => setCurrIndex(index)}
//       values={VALUES} />
//   </div>
//   <div className='text-center'>
//     {/* any arbitrary component can go here */}
//     {currIndex}
//   </div>
// </div>