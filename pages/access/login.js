import Head from 'next/head';
import Header from "components/Header/Header";
import {SignActionsSection} from "components/Main/SignActionsSection";
import Footer from "components/Footer/Footer";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>AluraGeek - login</title>
      </Head>

      <Header />
      <main>
        <SignActionsSection />
      </main>
      <Footer />
    </>
  )
}