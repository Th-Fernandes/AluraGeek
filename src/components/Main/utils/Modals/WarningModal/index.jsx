import { useEffect, useState } from "react";
import { NextLink } from "components/utils/NextLink";
import { supabaseAuth } from "helpers/supabase-auth-actions";
import { ModalContainer } from "../ModalContainer.js";
import { ModalContent } from "../ModalContent.js";
import Button from "components/utils/Buttons/DefaultButton";
import buttons from "./buttons.json";
import { supabaseDatabase } from "helpers/supabase-database-actions.js";

export function WarningModal({ title, textContent, setHasDeleteActionDone, productInfo }) {
  const [isDeleteConfirmed, setIsDeleteConfirmed] = useState(false);


  useEffect(() => {
    const { user } = supabaseAuth.getSessionInfo();

    async function getUserProducts() {
      const results = await supabaseDatabase.select({
        inTable: 'userProducts',
        match: {userId: user.id},
        select: 'items'
      })

      const { items } = results[0];
      return items;
    }

    async function filterProducts() {
      const items = await getUserProducts();
      const { name, price } = productInfo;

      const filterByDeletedProduct = items.filter(item => {
        if(item.name != name && item.price != price) return item
      });

      return filterByDeletedProduct;
    }

    async function changeProductsInDatabase() {
      const filteredResults = await filterProducts();

      supabaseDatabase.update({
        inTable: 'userProducts',
        match: {userId: user.id},
        updatedData: {items: filteredResults}
      })
    }

    if(isDeleteConfirmed) changeProductsInDatabase()
    
  }, [isDeleteConfirmed])

  return (
    <ModalContainer>
      <ModalContent className="modal-content">
        <article>
          <h3>{title}</h3>

          <p>{textContent}</p>
        </article>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {
            buttons.map(({ textContent, bgColor, color }) => (
              <NextLink href="">
                <Button
                  onClick={() => {
                    if(textContent === 'Cancelar') setHasDeleteActionDone(false)
                    if(textContent === 'Deletar') setIsDeleteConfirmed(true)
                  }}
                  style={{ width: '15rem' }}
                  bgColor={bgColor}
                  color={color} >
                  {textContent}
                </Button>
              </NextLink>
            ))
          }
        </div>
      </ModalContent>
    </ModalContainer>
  )
}