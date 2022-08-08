import { useState } from "react";
import { getUserInput } from "helpers/get-user-input";
import { StyledProductForm, StyledAdmProduct } from  "./styles";
import { DropProduct } from "components/Main/AddProductForm/DropProduct";
import InputContent from "components/utils/InputContent";
import { BrandButton } from "components/utils/BrandButton";

export default function AddProductForm() {
  const [inputUser, setInputUser] = useState();

  return (
    <StyledProductForm
      onSubmit={event => event.preventDefault()}
    >
      <fieldset>
        <legend>Adicionar novo produto</legend>

        <DropProduct />

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
         
            <InputContent 
              onChange={element => getUserInput(element, setInputUser)}
              label=" " 
              inputId="ProductDescAdm" 
              inputType="text" 
              placeholder="Descrição do produto"
              name="description"
            />      
        </StyledAdmProduct>

        <BrandButton textContent="Adicionar produto"/>
      </fieldset>
    </StyledProductForm>
  )
}