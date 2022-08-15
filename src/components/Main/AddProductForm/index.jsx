import { useEffect, useState } from "react";
import { supabaseStorage } from "helpers/supabase-storage-actions";
import { supabaseAuth } from "helpers/supabase-auth-actions";
import { supabaseDatabase } from "helpers/supabase-database-actions";
import { getUserInput } from "helpers/get-user-input";
import { StyledProductForm, StyledAdmProduct } from "./styles";
import { DropProduct } from "components/Main/AddProductForm/DropProduct";
import { InputContent } from "components/utils/InputContent";
import { TextAreaContent } from "components/utils/TextAreaContent";
import { BrandButton } from "components/utils/BrandButton";

export function AddProductForm() {
  const [inputUser, setInputUser] = useState({name: '', price: '', description: ''}/*OBJ*/);
  const [userProductImg, setUserProductImg] = useState(/* OBJ | event.target.files[i] */);

  useEffect(() => {console.log(inputUser)}, [inputUser])

  function handleSubmitUserInput(event) {
    event.preventDefault();

    const { id } = supabaseAuth.getUser();
    const { name } = inputUser;
    const bucketPath = `${id}/${name.replace(' ', '-')}-${id}.png`; 

    supabaseStorage.upload({ bucket: 'test', bucketPath, userImg: userProductImg});

    function updateProductsOnDatabase() {
      supabaseDatabase.selectAll({ inTable: 'userProducts' })
        .then(data => data.filter(row => row.userId === id))
        .then(filteredData => {
          console.log(filteredData)
          const { items, userId } = filteredData[0];

          supabaseDatabase.update({
            inTable: 'userProducts',
            updatedData: {
              items: [...items, { ...inputUser, thumb: supabaseStorage.getPublicURL('test', bucketPath)}]
            },
            match: { userId }
          });
        })
    }

    updateProductsOnDatabase();
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