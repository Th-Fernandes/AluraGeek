import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import AddProductForm from "components/Main/AddProductForm/AddProductForm";

export default function AdminPage() {
  return (
    <>
      <Header adminVer={true} />

      <main style={{backgroundColor: "#E5E5E5"}}>
        <AddProductForm />
      </main>

      <Footer />
    </>
  )
}