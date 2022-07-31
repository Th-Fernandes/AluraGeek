import { useEffect, useState } from "react";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import {Banner} from "components/Main/Banner";
import ErrorMessage from "components/Main/ErrorMessage/ErrorMessage";
import ProductSection from "components/Main/ProductSection/ProductSection";
import { supabase } from "utils/supabaseClient";

export default function Home() {
  const [productsData, setProductsData] = useState(/* JSON/array */)
  const [fetchDataErrorCode, setFetchDataErrorCode] = useState(/* number */)

  useEffect(async () => {
    const res = await supabase
      .from('products')
      .select('*')
      .then((response) => {
        const { status, data } = response

        status >= 400
          ? setFetchDataErrorCode(response.status)
          : setProductsData(data)
      })
  }, [])

  return (
    <>
      <Header />
      <main>
        <Banner />
        {
          productsData
            ? productsData.map((productList, index) => (
                <ProductSection
                  title={productList.category}
                  productData={productList}
                  key={index}
                />))
            : fetchDataErrorCode && <ErrorMessage errorCode={fetchDataErrorCode} />
        }
      </main>
      <Footer />
    </>
  )
}