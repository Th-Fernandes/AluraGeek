import Header from "components/Header/Header"
import Footer from "components/Footer/Footer"
import ProductDescription from "components/Main/ProductDescription/ProductDescription"
import React from "react";
import Head from 'next/head';



export default function ProductPage() {

  const [product, setProduct] = React.useState()

  React.useEffect(() => {
    const getUrlProductName = () => {
      const queryString = location.search
      const url = new URLSearchParams(queryString)
      return url.get('name')
    }

    const receaveData = () => {
      fetch('http://localhost:5000/products')
        .then(async response => {
          const dataProduct = await response.json()
          const productTitle = getUrlProductName()

          // console.log(dataProduct)
          let index = 0
          for(let product of dataProduct) {
            // nome dos objetos do servidor
            const productType = ['starwars','console', 'diversos']
            // a cadda varredura do for, acessa um objeto diferente
            const selectedProducts =  product[ productType[index] ]
            // após acessar o objeto, verifica se o método name é igual a query string na url
            for(let selectedProduct of selectedProducts) {
              if(selectedProduct.name === productTitle) {
                console.log(selectedProduct)
                setProduct(selectedProduct)
              }
            }
            index++
          }

          console.log(dataProduct[1]['console'][0].name)
          setData(dataProduct)
        })
    }

    receaveData()
    
  }, [])
  
  const [data, setData] = React.useState(undefined)

  return (
    <>
      <Head>
        <title>AluraGeek - produtos</title>
      </Head>

      <Header />

      <main style={{ backgroundColor: "#E5E5E5" }}>
        {
          product &&
          <ProductDescription 
          productData={product}
        />
        }
        {/*<SimilarProducts /> */}
      </main>

      <Footer />
    </>
  )
}