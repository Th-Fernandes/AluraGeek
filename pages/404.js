import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import colors from "utils/colors.json";
import { useRouter } from "next/router";

export default function Error404() {
 const router = useRouter()

  return (
    <>
      <Header />

      <main >
        <section className="404-error">
          <h1>OPS! :(</h1>
          <p>Parece que a página que você tentou acessar não existe ou foi removida.</p>

          <button
            onClick={() => router.push('./') }
          >
            Voltar ao menu principal
          </button>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        main {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          min-height: 70rem;
          background-color: #E5E5E5;
        }

        h1 {
          font-size: 4.5rem;
        }

        p {
          font-size: 2.3rem;
          margin-bottom: 2rem;
        }

        button {
          padding: 0 1.2rem;
          background-color: ${colors.primary["blue"]};
          color: ${colors.neutrals["white"]};
          height: 6.2rem;
          font-size: 1.8rem;
          font-weight: 600;
        }
        
      `}</style>
    </>
  )
}