import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import pallet from "utils/colors.json";
import Head from 'next/head';
import ClientProducts from 'components/Main/ClientProducts'


export default function UserProducts() {
  return (
    <>
      <Head>
        <title>AluraGeek - meus produtos</title>
      </Head>

      <Header />

      <main style={{minHeight: '40rem', backgroundColor: pallet.neutrals["white-300"]}}>
        <ClientProducts />


      </main>

      <Footer />
    </>
  )
}