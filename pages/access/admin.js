import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import DefaultError from "components/Main/DefaultError"
import AddProductForm from "components/Main/AddProductForm/AddProductForm";
import React from "react";
import { supabase } from "utils/supabaseClient";
import { useRouter } from "next/router";

export default function AdminPage() {
  const [isLogged, setIslogged] = React.useState()
  const router = useRouter()

  React.useEffect(() => {
    const loginSesssion = supabase.auth.session()

    if (loginSesssion) {
      setIslogged(true)
    }



  }, [])


    return (
      <>
        <Header adminVer={true} />

        <main style={{ backgroundColor: "#E5E5E5" }}>
          {isLogged ? <AddProductForm /> : <DefaultError
          title="Acesso negado :0"
          description="Você precisa primeiro realizar o login para acessar essa página"
          button={{
            router: "/access/login",
            textContent: "ir para página de login"
          }}
        /> }
        </main>

        <Footer />
      </>
    )
  

}