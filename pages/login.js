import Header from "components/Header/Header"
import Footer from "components/Footer/Footer"
import LoginSection from "components/Main/LoginSection/LoginSection"
import Head from 'next/head'
import iconLogo from "img/logo2.svg"

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>AluraGeek - login</title>
        <link rel="icon" type="image/png" sizes="32x32" href={iconLogo.src}/>
      </Head>

      <Header />
      <main style={{backgroundColor: "#E5E5E5"}}>
        <LoginSection />
      </main>
      <Footer />
    </>
  )
}