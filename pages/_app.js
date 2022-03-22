import {GlobalStyle} from "utils/globalStyle"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}
