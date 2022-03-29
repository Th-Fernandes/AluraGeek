import {StyledProductForm, StyledAdmProduct} from  "./styles";
import crossIcon from "img/cross.svg";
import InputContent from "components/InputContent/InputContent";

export default function AddProductForm() {
  return (
    <StyledProductForm
      onSubmit={event => event.preventDefault()}
    >
      <fieldset>
        <legend>Adicionar novo produto</legend>

        <div className="drop-product-container">
          <label htmlFor="">
            <img src={crossIcon.src} alt="Icone de mais. Coloque aqui a imagem de seu produto." />
            <p>Adicionar uma imagem para o produto</p>
          </label>
          <input type="file" />
        </div>

        <StyledAdmProduct className="adm-product-info">
          <div>
            <InputContent label="Nome do produto" inputId="productNameAdm" inputType="text"/>
          </div>
          <div>
            <InputContent label="Preço do produto" inputId="productPriceAdm" inputType="number"/>
          </div>

          <div>
            <InputContent label=" " inputId="ProductDescAdm" inputType="text" placeholder="Descrição do produto"/>
          </div>
        </StyledAdmProduct>

        <button 
          type="submit"
          style={{
            margin: '1.6rem 0',
            width: "100%",
            backgroundColor: "#2A7AE4",
            color: "#ffffff",
            height: '5.1rem',
            fontSize: '1.6rem'
          }}
        >
            Adicionar produto
        </button>
      </fieldset>
    </StyledProductForm>
  )
}