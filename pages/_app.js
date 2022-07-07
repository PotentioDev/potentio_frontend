import '../styles/globals.css'
import Head from 'next/head'
export default function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
          <link rel="icon" src='../pubilc/favicon.ico' />
          <title>Potentio</title>
      </Head>
      <Component {...pageProps} />
    </>

  ) 
}

