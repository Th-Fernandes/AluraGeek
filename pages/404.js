import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import DefaultError from "components/Main/DefaultError/index.jsx"

export default function Error404() {
  return (
    <>
      <Header />

      <main >
        <DefaultError
          title="Página não encontrada :("
          description="Parece que a página que você tentou acessar não existe ou foi removida."
          button={{
            router: '/',
            textContent: 'Voltar ao menu principal'
          }}
        />
      </main>

      <Footer />
    </>
  )
}