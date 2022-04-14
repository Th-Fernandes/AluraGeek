import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
import React from "react"
import { supabase } from "../src/utils/supabaseClient"
import ProductSection from "components/Main/ProductSection/ProductSection" 

/* 
  OBJETIVO DO DIA: 08/04
  - REFATORAR A PARTE DE PRODUTOS DO DB.JSON
    > Motivação: é necessária muitas voltas pra conseguir acessar o conteúdo dos produtos
  - Criar um controler para bater na fake api
    > Motivação: cada component está fazendo seu fetch, gerando código duplicado,
                 e não só duplicado como cada um segue seu padrão.
  
                 * LEMBRAR DE TIRAR O COMENTARIO DO ROUTER.PUSH DO COMPONENT HEADER
*/

export default function () {
  const [productData, setProductData] = React.useState()

  React.useEffect(async ()=> {  
  const { data, error } = await supabase
        .from('products')
        .select('*')
      
        console.log(data)
        setProductData(data)

   
  }, [])

  return (
    <>
      <Header />

      <main style={{minHeight: '450px'}}>
        {
          productData &&
          productData.map((element,index) => (
            <ProductSection 
              title={element.category}
              productData={element}
              key={index}
            />
          ))
        }
      </main>

      <Footer />
    </>
  )
}