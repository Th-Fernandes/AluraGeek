import Header from "components/Header/Header";
import { useEffect, useState } from "react";
import { supabaseAuth} from "helpers/supabase-auth-actions";
import { supabaseDatabase } from "helpers/supabase-database-actions";
import { AddProductForm} from "components/Main/AddProductForm/";
import DefaultError from "components/Main/DefaultError";
import Footer from "components/Footer/Footer";

/* 
  1. capturar os novos dados [V]
  2. capturar os dados da url [v]
    > encontrar esse trecho na tabela do usuario []
    > substituir pelos dados novos []
*/



export default function EditPage() {
  let queryStringValues;
  const [isLogged, setIsLogged] = useState(false);
  // CAPTURA DOS DADOS DO INPUT
  const [inputUserEditedData, setInputUserEditedData] = useState({})
  const [isEditedDataSubmitted, setIsEditedDataSubmited] = useState(false)
  //

  useEffect(() => {
    const hasSession = supabaseAuth.getSessionInfo();

    hasSession ? setIsLogged(true) : setIsLogged(false);
  }, [])


  useEffect(() => {
    function getProductDataByUrl(){
      const queryString = location.search;
      const url = new URLSearchParams(queryString);
      return {
        name: url.get('name'),
        price: url.get('price')
      };
    }

    queryStringValues = getProductDataByUrl();
  }, [isEditedDataSubmitted])

  useEffect(async () => {
    const {id} = supabaseAuth.getUser();

    if(isEditedDataSubmitted) {
      const updatedData = await supabaseDatabase.select({
        inTable: 'userProducts', 
        select: 'items', 
        match: {userId: id}
      })  
        .then(data => data[0].items )
        .then(data => data.map(product => {
          if(product.name === queryStringValues.name && product.price == queryStringValues.price) return {
            ...inputUserEditedData,
            thumb: product.thumb
          }
          return product
        }))     

        console.log(updatedData)

      supabaseDatabase.update({
        inTable: 'userProducts',
        updatedData: {items: updatedData},
        match: {userId: id}
      }).then(() => console.log('updated'))  
    }
  }, [isEditedDataSubmitted])

  function handleSetInputEdited(event, inputName) {
    setInputUserEditedData(actualState => {
      return {
        ...actualState,
      [inputName]: event.target.value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault();

    setIsEditedDataSubmited(true)
  }

  return (
    <>
      <Header/>

      <main>
        {
          isLogged 
            ? (
              <form onSubmit={(event) => handleSubmit(event)}>
                nome do produto
                <input onChange={(event) => handleSetInputEdited(event, 'name')} />
                preço do produto
                <input onChange={(event) => handleSetInputEdited(event, 'price')}/>
                descrição
                <input onChange={(event) => handleSetInputEdited(event, 'description')} />

                <button>enviar</button>
              </form>
            )
            : <DefaultError
                title="Acesso negado :0"
                description="Você precisa primeiro realizar o login para acessar essa página"
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