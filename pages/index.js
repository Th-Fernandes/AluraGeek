import Header from "components/Header/Header";
import Footer from "components/Footer/Footer"
import Banner from "components/Main/Banner/Banner"
import ProductSection from "components/Main/ProductSection/ProductSection"
import React from "react";
import { SearchController } from "controller/SearchRender"
import { supabase } from "utils/supabaseClient"


export default function Home() {

  const [data, setData] = React.useState()
  const [searchData, setSearchData] = React.useState()

  SearchController.registerState(setSearchData)

  React.useEffect(async () => {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .then((response) => {
        setData(response.data)
        return response.data
      })
  }, [])

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
              data.map((element, index) => (
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