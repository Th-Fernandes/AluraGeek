import Head from 'next/head'
import Header from "components/Header/Header"
import LoginSection from "components/Main/LoginSection/LoginSection"
import Footer from "components/Footer/Footer"
import {loginController} from "controller/isLogged"
import { useRouter} from 'next/router'
import React from 'react'

export default function LoginPage() {
  console.log(loginController.userInfo)

  const router = useRouter()

  React.useEffect(() => {
    const host = window.location.hostname
    if(loginController.userInfo) router.push('./admin')
  })

  return (
    <>
      {       
        !loginController.userInfo &&
        
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
      }
    </>
  )
}