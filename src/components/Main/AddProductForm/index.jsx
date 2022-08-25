import { useState } from "react";
import { useRouter } from "next/router";
import { supabaseStorage } from "helpers/supabase-storage-actions";
import { supabaseAuth } from "helpers/supabase-auth-actions";
import { supabaseDatabase } from "helpers/supabase-database-actions";
import { getUserInput } from "helpers/get-user-input";
import { StyledProductForm, StyledAdmProduct } from "./styles";
import { DropProduct } from "components/Main/AddProductForm/DropProduct";
import { InputContent } from "components/utils/InputContent";
import { TextAreaContent } from "components/utils/TextAreaContent";
import { BrandButton } from "components/utils/Buttons/BrandButton";

export function AddProductForm() {
  const nextRouter = useRouter();
  const [inputUser, setInputUser] = useState({name: '', price: '', description: ''}/*OBJ*/);
  const [userProductImg, setUserProductImg] = useState(/* OBJ | event.target.files[i] */);

  function handleSubmitUserInput(event) {
    event.preventDefault();

    const { id } = supabaseAuth.getUser();
    const { name } = inputUser;
    const bucketPath = `${id}/${name.replace(' ', '-')}-${id}.png`; 

    async function getProductsByUserId() {
      const getUserProducts = await supabaseDatabase.select({
        inTable: 'userProducts', 
        select: 'items', match: {userId: id}
      });

      return getUserProducts[0].items;
    }

    async function updateProductsOnDatabase() {
      const items = await getProductsByUserId();
     
      await supabaseDatabase.update({
        inTable: 'userProducts',
        updatedData: {
          items: [...items, { ...inputUser, thumb: supabaseStorage.getPublicURL('test', bucketPath)}]
        },
        match: {userId: id}
      });
    }

    supabaseStorage.upload({ bucket: 'test', bucketPath, userImg: userProductImg});
    updateProductsOnDatabase();
    nextRouter.push('/access/products');
  }

  return (
    <StyledProductForm
      onSubmit={event => handleSubmitUserInput(event)}
    >
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

        <BrandButton textContent="Adicionar produto"/>
      </fieldset>
    </StyledProductForm>
  )
}