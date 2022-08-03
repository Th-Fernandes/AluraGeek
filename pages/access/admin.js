import Header from "components/Header/Header";
import { useEffect, useState } from "react";
import {supabaseAuth} from "helpers/supabase-auth-actions";
import AddProductForm from "components/Main/AddProductForm/AddProductForm";
import DefaultError from "components/Main/DefaultError";
import Footer from "components/Footer/Footer";

export default function AdminPage() {
  const [isLogged, setIslogged] = useState();

  useEffect(() => {
    const hasSession = supabaseAuth.getSessionInfo();
    
    hasSession ? setIslogged(true) : isLogged(false);
  }, [])


    return (
      <>
        <Header adminVer={true}/>

        <main>
          {
            isLogged 
              ? <AddProductForm /> 
              : (
                <DefaultError
                  title="Acesso negado :0"
                  description="Você precisa primeiro realizar o login para acessar essa página"
                  button={{
                    router: "/access/login",
                    textContent: "ir para página de login"
                  }}
                />
              ) 
          }
        </main>

        <Footer />
      </>
    )
  

}