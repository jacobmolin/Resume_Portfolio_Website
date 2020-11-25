import '../styles/globals.css'
import Layout from '../components/layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;500;600&display=swap" />

        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp