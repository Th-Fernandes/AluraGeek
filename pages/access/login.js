import Head from 'next/head';
import Header from "components/Header/Header";
import { SignActionsSection } from "components/Main/SignActionsSection";
import Footer from "components/Footer/Footer";
import { supabaseAuth } from "helpers/supabase-auth-actions";
import { useRouter } from 'next/router'

export default function LoginPage() {
  const router = useRouter();
  const isUserLogged = supabaseAuth.getSessionInfo();

  function handleRedirectToHomePage() {
    router.push('/')
  }

  return (
    <>
      {
        !isUserLogged
          ? (
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
          : handleRedirectToHomePage()
      }
    </>
  )
}