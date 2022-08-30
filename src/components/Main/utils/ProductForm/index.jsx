import { getUserInput } from "helpers/get-user-input";
import { DropProduct } from "components/Main/utils/ProductForm/DropProduct";
import { BrandButton } from "components/utils/Buttons/BrandButton";
import { InputContent } from "components/utils/InputContent";
import { TextAreaContent } from "components/utils/TextAreaContent";
import { StyledProductForm, StyledAdmProduct } from "./styles";
/* 
  TASK IMPORTANTE: PASSAR O DROP PARA CA
*/

export function ProductForm({onSubmit, setInputUser, setUserProductImg}) {
  return (
    <StyledProductForm onSubmit={onSubmit}>
      <fieldset>
        <legend>Adicionar novo produto</legend>

        <DropProduct setUserProductImg={setUserProductImg} />

        <StyledAdmProduct className="adm-product-info">
          <InputContent
            onChange={element => getUserInput(element, setInputUser)}
            label="Nome do produto"
            inputId="productNameAdm"
            inputType="text"
            name="name"
          />

          <InputContent
            onChange={element => getUserInput(element, setInputUser)}
            label="Preço do produto"
            inputId="productPriceAdm"
            inputType="number"
            name="price"
          />

          <TextAreaContent
            onChange={element => getUserInput(element, setInputUser)}
            placeholder="Descrição do produto"
            name="description"
          />
        </StyledAdmProduct>

        <BrandButton textContent="Adicionar produto" />
      </fieldset>
    </StyledProductForm>
  )
}