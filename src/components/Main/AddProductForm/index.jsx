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
import { supabase } from "utils/supabaseClient";

export function AddProductForm() {
  const nextRouter = useRouter();
  const [inputUser, setInputUser] = useState({ name: '', price: '', description: '' }/*OBJ*/);
  const [userProductImg, setUserProductImg] = useState(/* OBJ | event.target.files[i] */);

  function handleSubmitUserInput(event) {
    event.preventDefault();

    const { id } = supabaseAuth.getUser();
    const { name } = inputUser;
    const bucketPath = `${id}/${name.replace(' ', '-')}-${id}.png`;
    const table = 'userProducts'

    async function getProductsByUserId() {
      const getUserProducts = await supabaseDatabase.select({
        inTable: table,
        select: 'items', match: { userId: id },
      }).then((data) => data.length > 0 ? data[0].items : false)

      console.log(getUserProducts)
      if (getUserProducts) return getUserProducts;

      async function createTableFirstTime() {
        await supabaseDatabase.insert({
          inTable: table,
          insert: { userId: id, items: [] }
        });

        return [];
      }

      return createTableFirstTime();
    }

    async function updateProductsOnDatabase() {
      const items = await getProductsByUserId();

      await supabaseDatabase.update({
        inTable: table,
        updatedData: {
          items: [...items, { ...inputUser, thumb: supabaseStorage.getPublicURL('test', bucketPath) }]
        },
        match: { userId: id }
      });
    }

    supabaseStorage.upload({ bucket: 'test', bucketPath, userImg: userProductImg });
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

        <BrandButton textContent="Adicionar produto" />
      </fieldset>
    </StyledProductForm>
  )
}