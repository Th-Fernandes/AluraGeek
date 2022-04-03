import Header from "components/Header/Header";
import Footer from "components/Footer/Footer"
import Banner from "components/Main/Banner/Banner"
import ProductSection from "components/Main/ProductSection/ProductSection"
import React from "react";

export default function Home() {

  const [data, setData] = React.useState(undefined)

  React.useEffect(() => {
    receaveData()

  }, [])

  const receaveData = () => {
    fetch('http://localhost:5000/products')
      .then(async response => {
        const dataProduct = await response.json()
        //console.log(dataProduct)
        setData(dataProduct)
      }) 
  }


  return (
    <>
      <Header />
        <main>
          <Banner /> 
          { 
            data && 
            data.map((element,index) => {
              console.log()
              return (
                <ProductSection 
                  title={( Object.keys( data[index] ) )[0]}
                  productData={element.starwars || element.console || element.diversos}
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