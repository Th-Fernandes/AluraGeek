import Header from "components/Header/Header"
import Footer from "components/Footer/Footer"
import ProductDescription from "components/Main/ProductDescription/ProductDescription"
import React from "react";
import Head from 'next/head';



export default function ProductPage() {

  React.useEffect(() => {
    const getUrlProductName = () => {
      const querySting = location.search
      const url = new URLSearchParams(querySting)
      return url.get('name')
    }

    const receaveData = () => {
      fetch('http://localhost:5000/products')
        .then(async response => {
          const dataProduct = await response.json()
          const productTitle = getUrlProductName()
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
        <ProductDescription />
        {/*<SimilarProducts /> */}
      </main>

      <Footer />
    </>
  )
}