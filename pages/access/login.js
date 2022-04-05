import Head from 'next/head'
import Header from "components/Header/Header"
import LoginSection from "components/Main/LoginSection/LoginSection"
import Footer from "components/Footer/Footer"


export default function LoginPage() {



  return (
    <>
      <Head>
        <title>AluraGeek - login</title>
      </Head>

      <Header />
      <main style={{backgroundColor: "#E5E5E5"}}>
        <LoginSection />
      </main>
      <Footer />
    </>
  )
}