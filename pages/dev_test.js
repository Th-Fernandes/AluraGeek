import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
import React from "react"
 
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
  const [data, setData] = React.useState(undefined)

  React.useEffect(() => {

    const receaveData = () => {
      fetch('http://localhost:5001/products')
        .then(async response => {
          const dataProduct = await response.json()
          
          setData(dataProduct)
          
        })
    }
    receaveData()

    //console.log(ProductData())
   
  }, [])

  return (
    <>
      <Header />
      {data && data[0].items.map((el, index) => {
        return <span key={index}>{el.name}</span>
      }) && console.log(data)}
      <main>

      </main>

      <Footer />
    </>
  )
}