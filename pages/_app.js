import {GlobalStyle} from "utils/globalStyle"
import Head from 'next/head';
import iconLogo from "img/logo2.svg"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>AluraGeek</title>
        <link rel="icon" type="image/png" sizes="32x32" href={iconLogo.src}/>
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}
