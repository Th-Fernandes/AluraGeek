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
    if(isEditedDataSubmitted) {
      const {id} = supabaseAuth.getUser();
      const [inTable, select, match] = ['userProducts', 'items', {userId: id}]

      async function getUserProducts() {
        return await supabaseDatabase.select({inTable, select, match})  
          .then(data => data[0].items );
      }

      async function replaceProductData(getProducts) {
        const products = await getProducts();

        const productsWithReplacedData = products.map(product => {
          const isNameMatched = product.name === queryStringValues.name;
          const isPriceMatched = product.price == queryStringValues.price;

          if(isNameMatched && isPriceMatched) return {
            ...inputUserEditedData,
            thumb: product.thumb
          }
          return product;
        })
        return productsWithReplacedData;
      }
      
      async function updateEditedProductOnDatabase() {
        const updatedData = await replaceProductData(getUserProducts);

        supabaseDatabase.update({
          inTable, 
          match,
          updatedData: {items: updatedData}
        }) 
      } 

      updateEditedProductOnDatabase();
    }
  }, [isEditedDataSubmitted])

  return (
    <>
      <Header/>

      <main>
        {
          isLogged 
            ? (
              <>
                <form onSubmit={(event) => handleSubmit(event)}>
                nome do produto
                <input onChange={(event) => handleSetInputEdited(event, 'name')} />
                preço do produto
                <input onChange={(event) => handleSetInputEdited(event, 'price')}/>
                descrição
                <input onChange={(event) => handleSetInputEdited(event, 'description')} />

                <button>enviar</button>
              </form>
              <AddProductForm/>
              </>
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