import { ProductForm } from "../utils/ProductForm";
import { useEffect, useState } from "react";
import { supabaseAuth } from "helpers/supabase-auth-actions";
import { supabaseDatabase } from "helpers/supabase-database-actions";

export function EditProductForm({queryStringValues}) {
  const [inputUser, setInputUser] = useState({ name: '', price: '', description: '' }/*OBJ*/);
  const [userProductImg, setUserProductImg] = useState(/* OBJ | event.target.files[i] */);
  const [isEditedDataSubmitted, setIsEditedDataSubmited] = useState(false)

  useEffect(async () => {
    if (isEditedDataSubmitted) {
      const { id } = supabaseAuth.getUser();
      const [inTable, select, match] = ['userProducts', 'items', { userId: id }]

      async function getUserProducts() {
        return await supabaseDatabase.select({ inTable, select, match })
          .then(data => data[0].items);
      }

      async function replaceProductData(getProducts) {
        const products = await getProducts();

        const productsWithReplacedData = products.map(product => {
          const isNameMatched = product.name === queryStringValues.name;
          const isPriceMatched = product.price == queryStringValues.price;

          if (isNameMatched && isPriceMatched) return {
            ...inputUser,
            thumb: product.thumb
          }
          return product;
        })
        return productsWithReplacedData;
      }

      async function updateEditedProductOnDatabase() {
        const updatedData = await replaceProductData(getUserProducts);

        supabaseDatabase.update({
          inTable,
          match,
          updatedData: { items: updatedData }
        })
      }

      updateEditedProductOnDatabase();
    }
  }, [isEditedDataSubmitted])

  return (
    <ProductForm
      onSubmit={event => {
        event.preventDefault();
        setIsEditedDataSubmited(true);
      }}
      setInputUser={setInputUser}
      setUserProductImg={setUserProductImg}
      actionType="edit"
    />
  )
}