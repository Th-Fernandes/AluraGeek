import Header from "components/Header/Header"
import Footer from "components/Footer/Footer"
import ProductDescription from "components/Main/ProductDescription/ProductDescription"
import SimilarProducts from "components/main/SimilarProducts/SimilarProducts.jsx"
import Head from 'next/head';


export default function ProductPage() {
  return (
    <>
      <Head>
        <title>AluraGeek - produtos</title>
      </Head>

      <Header />

      <main style={{backgroundColor: "#E5E5E5"}}>
        <ProductDescription />
        <SimilarProducts />
      </main>

      <Footer />
    </>
  )
}