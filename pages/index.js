import Header from "components/Header/Header";
import Footer from "components/Footer/Footer"
import Banner from "components/Main/Banner/Banner"
import ProductSection from "components/Main/ProductSection/ProductSection"
import productData from "data/products.json"
import React from "react";
import star from "img/star-wars-product.svg";
import Head from 'next/head';
import iconLogo from "img/logo2.svg"



export default function Home() {
  return (
    <>
      <Head>
        <title>AluraGeek</title>
        <link rel="icon" type="image/png" sizes="32x32" href={iconLogo.src}/>
      </Head>

      <Header />
        <main>
          <Banner />
          { 
            [productData.starWars, productData.console, productData.diversos].map((element,index) => {
              return (
                <ProductSection 
                  title={Object.keys(productData)[index]}
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