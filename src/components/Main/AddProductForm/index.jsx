import { useState } from "react";
import { useRouter } from "next/router";
import { supabaseStorage } from "helpers/supabase-storage-actions";
import { supabaseAuth } from "helpers/supabase-auth-actions";
import { supabaseDatabase } from "helpers/supabase-database-actions";
import { ProductForm } from "components/main/utils/ProductForm";

export function AddProductForm() {
  const nextRouter = useRouter();
  const [inputUser, setInputUser] = useState({ name: '', price: '', description: '' }/*OBJ*/);
  const [userProductImg, setUserProductImg] = useState(/* OBJ | event.target.files[i] */);

  function handleSubmitUserInput(event) {
    event.preventDefault();

    const { id } = supabaseAuth.getUser();
    const { name } = inputUser;
    const bucketPath = `${id}/${name.replace(' ', '-')}-${id}.png`;
    const [inTable, match] = ['userProducts', { userId: id }]

    async function getProductsByUserId() {
      const getUserProducts = await supabaseDatabase.select({
        inTable,
        select: 'items', 
        match,
      }).then((data) => data.length > 0 ? data[0].items : false)

      console.log(getUserProducts)
      if (getUserProducts) return getUserProducts;

      async function createTableFirstTime() {
        await supabaseDatabase.insert({
          inTable,
          insert: { userId: id, items: [] }
        });

        return [];
      }

      return createTableFirstTime();
    }

    async function updateProductsOnDatabase() {
      const items = await getProductsByUserId();
      const thumbUrl = supabaseStorage.getPublicURL('test', bucketPath)

      await supabaseDatabase.update({
        inTable,
        match,
        updatedData: { items: [...items, { ...inputUser, thumb: thumbUrl  }] },
      });
    }

    supabaseStorage.upload({ bucket: 'test', bucketPath, userImg: userProductImg });
    updateProductsOnDatabase();
    nextRouter.push('/access/products');
  }

  return (
    <ProductForm 
      onSubmit={event => handleSubmitUserInput(event)} 
      setInputUser={setInputUser}
      setUserProductImg={setUserProductImg}
      actionType="add"
    />
  )
}