import Header from "components/Header/Header";
import Footer from "components/Footer/Footer"
import Banner from "components/Main/Banner/Banner"
import ProductSection from "components/Main/ProductSection/ProductSection"
import React from "react";

export default function Home() {

  const [data, setData] = React.useState(undefined)

  React.useEffect(() => {
    const receaveData = () => {
      fetch('http://localhost:5001/products')
        .then(async response => {
          const dataProduct = await response.json()
          //console.log(dataProduct)
          setData(dataProduct)
        }) 
    }

    receaveData()
  }, [])




  return (
    <>
      <Header />
        <main>
          <Banner /> 
          { 
            data && 
            data.map((element,index) => {
              console.log(element)
              return (
                <ProductSection 
                  title={element.category}
                  productData={element}
                  key={index}
                />
              )
            })
          }
        </main>
      <Footer />
    </>
  )
}