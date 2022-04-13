import Header from "components/Header/Header";
import Footer from "components/Footer/Footer"
import Banner from "components/Main/Banner/Banner"
import ProductSection from "components/Main/ProductSection/ProductSection"
import React from "react";
import {SearchController} from  "controller/SearchRender"

export default function Home() {

  const [data, setData] = React.useState(undefined)
  const [searchData, setSearchData] = React.useState()

  SearchController.registerState(setSearchData)

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

  React.useEffect(()=>{ console.log('HHHHHHHHHH')}, [searchData])
  return (
    <>
      <Header searchData={setSearchData} />
        <main>
          <Banner /> 
          {
            searchData 
            ?
              (  
                searchData.map((element, index) => (
                    <ProductSection
                      title=' '
                      productData={element}
                      key={index}
                    />
                  )
                )
              )
            :
              (
                data && 
                data.map((element,index) => (
                    <ProductSection 
                      title={element.category}
                      productData={element}
                      key={index}
                    />
                  )
                )
              )
          }

         
        </main>
      <Footer />
    </>
  )
}