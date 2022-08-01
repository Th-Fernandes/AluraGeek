import { useEffect, useState } from "react";
import {supabaseDatabase} from "helpers/supabase-database-actions";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import {Banner} from "components/Main/Banner";
import ErrorMessage from "components/Main/ErrorMessage/ErrorMessage";
import ProductSection from "components/Main/ProductSection/ProductSection";

export default function Home() {
  const [productsData, setProductsData] = useState(/* JSON/array */)
  const [fetchDataErrorCode, setFetchDataErrorCode] = useState(/* number */)

  useEffect(() => {
    supabaseDatabase.selectAll({
      inTable: 'products',
      thenDo: (data) => setProductsData(data),
      errorHandler: (data,status) =>  setFetchDataErrorCode(status)
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