import Header from "components/Header/Header";
import Footer from "components/Footer/Footer"
import Banner from "components/Main/Banner/Banner"
import ProductSection from "components/Main/ProductSection/ProductSection"
import productData from "data/products.json"
import React from "react";
import star from "img/star-wars-product.svg";

export default function Home() {
  return (
    <>

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