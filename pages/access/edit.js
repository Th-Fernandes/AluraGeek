import Header from "components/Header/Header";
import { useEffect, useState } from "react";
import { supabaseAuth } from "helpers/supabase-auth-actions";
// import { supabaseDatabase } from "helpers/supabase-database-actions";
import { EditProductForm } from "components/Main/EditProductForm/";
import DefaultError from "components/Main/DefaultError";
import Footer from "components/Footer/Footer";

/* 
  1. capturar os novos dados [V]
  2. capturar os dados da url [v]
    > encontrar esse trecho na tabela do usuario []
    > substituir pelos dados novos []
*/



export default function EditPage() {
  const [isLogged, setIsLogged] = useState(false);
  const [queryStringValues, setQueryStringValues] = useState({});


  useEffect(() => {
    const hasSession = supabaseAuth.getSessionInfo();

    hasSession ? setIsLogged(true) : setIsLogged(false);
  }, [])

  useEffect(() => {
    function getProductDataByUrl() {
      const queryString = location.search;
      const url = new URLSearchParams(queryString);
      return {
        name: url.get('name'),
        price: url.get('price')
      };
    }

    setQueryStringValues( getProductDataByUrl() );
  }, [])

  return (
    <>
      <Header />

      <main>
        {
          isLogged
            ? <EditProductForm queryStringValues={queryStringValues} />
            : <DefaultError
                title="Acesso negado :("
                description="o login é necessário para acessar essa página"  
                button={{
                  router: "/access/login",
                  textContent: "ir para página de login"
                }}
              />
        }
      </main>

      <Footer />
    </>
  )
}