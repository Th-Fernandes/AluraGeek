import Header from "components/Header/Header"
import Footer from "components/Footer/Footer"
import ProductDescription from "components/Main/ProductDescription/ProductDescription"
import React from "react";
import Head from 'next/head';



export default function ProductPage() {

  const [product, setProduct] = React.useState()
  const [data, setData] = React.useState(undefined)

  React.useEffect(() => {
    const getUrlProductName = () => {
      const queryString = location.search
      const url = new URLSearchParams(queryString)
      return url.get('name')
    }

    const receaveData = () => {

      fetch('http://localhost:5001/products')
        .then( async response => {
          const dataProduct = await response.json()
          const urlTitle = getUrlProductName()

          for(let categorie of dataProduct) {
            const matchTitle = categorie.items.filter(product => product.name === urlTitle)
            console.log(categorie)
            if (matchTitle.length !== 0) {
              setProduct(...matchTitle)
              break
            }
          }
          setData(dataProduct)
        }) 
    }

    receaveData()
    
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