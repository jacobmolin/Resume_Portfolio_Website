// import './bootstrap'
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



// import React from 'react';
// import PropTypes from 'prop-types';
// import Head from 'next/head';
// import Layout from '../components/layout'
// import { ThemeProvider } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import theme from '../src/theme';

// export default function MyApp(props) {
//   const { Component, pageProps } = props;

//   React.useEffect(() => {
//     // Remove the server-side injected CSS.
//     const jssStyles = document.querySelector('#jss-server-side');
//     if (jssStyles) {
//       jssStyles.parentElement.removeChild(jssStyles);
//     }
//   }, []);

//   return (
//     <Layout>
//       <React.Fragment>
//         <Head>
//           <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
//           <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
//           <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap" />
//           <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;500;600&display=swap" />
//         </Head>
//         {/* <ThemeProvider theme={theme}> */}
//         {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
//         {/* <CssBaseline /> */}
//         <Component {...pageProps} />
//         {/* </ThemeProvider> */}

//       </React.Fragment>
//     </Layout>
//   );
// }

// MyApp.propTypes = {
//   Component: PropTypes.elementType.isRequired,
//   pageProps: PropTypes.object.isRequired,
// };