import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import AddProductForm from "components/Main/AddProductForm/AddProductForm";
import React from "react";
import {supabase} from "utils/supabaseClient";
import { useRouter } from "next/router";

export default function AdminPage() {
  const [isLogged, setIslogged] = React.useState()
  const router = useRouter()

  React.useEffect(() => {
    const loginSesssion = supabase.auth.session()

    if(!loginSesssion) {
      router.push('/access/login')  
      return
    }

    setIslogged(true)

  }, [])
  return (
    <>
      {
      isLogged &&
        <>
          <Header adminVer={true} />

          <main style={{backgroundColor: "#E5E5E5"}}>
            <AddProductForm />
          </main>

          <Footer />
          </>
      }
    </>
  )
}