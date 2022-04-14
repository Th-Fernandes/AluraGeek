import Head from 'next/head';
import Header from "components/Header/Header"
import ProductDescription from "components/Main/ProductDescription/ProductDescription"
import Footer from "components/Footer/Footer"
import React from "react";
import { supabase } from "utils/supabaseClient"


export default function ProductPage() {

  const [product, setProduct] = React.useState()
  //const [data, setData] = React.useState(undefined)

  //função responsável por pegar as informações do produto 
  //clicado pela query string.só funciona no useEffect pois
  // é possui funcionalidades do browser
  const getUrlProductName = () => {
    const queryString = location.search
    const url = new URLSearchParams(queryString)
    console.log(url.get('name'))
    return url.get('name')
  }



  React.useEffect( async() => {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .then(response => {
        const dataProduct = response.data
        const urlProductTitle = getUrlProductName()

        console.log(dataProduct)

        for (let categorie of dataProduct) {
          const matchTitle = categorie.items.filter(product => 
            product.name === urlProductTitle
          )

          if (matchTitle.length !== 0) {
            setProduct(...matchTitle)
            console.log(matchTitle)
            break
          }
        }


        return response.data
      })
  }, [])
  
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