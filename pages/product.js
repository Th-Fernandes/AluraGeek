import { useEffect, useState } from "react";
import {supabaseDatabase} from "helpers/supabase-database-actions";
import Head from 'next/head';
import Header from "components/Header/Header";
import ProductDescription from "components/Main/ProductDescription/ProductDescription";
import Footer from "components/Footer/Footer";


export default function ProductPage() {
  const [product, setProduct] = useState();

  useEffect(() => {
    function getUrlProductName(){
      const queryString = location.search;
      const url = new URLSearchParams(queryString);
      return url.get('name');
    }

    supabaseDatabase.selectAll({
      inTable: 'products',
      thenDo: (data) => {
        const urlProductTitle = getUrlProductName();

        for (let { items } of data) {
          const matchTitle = items.filter( ({name}) => name === urlProductTitle);

          if (matchTitle.length !== 0) {
            setProduct(...matchTitle);
            break;
          };
        };
      }
    })
  }, [])
  
  return (
    <>
      <Head>
        <title>AluraGeek - produtos</title>
      </Head>

      <Header />

      <main style={{ backgroundColor: "#E5E5E5" }}>
        { product && <ProductDescription productData={product}/> }
      </main>

      <Footer />
    </>
  )
}