import { useState } from "react";
import { NextLink } from "components/utils/NextLink";
import deleteIcon from "/public/images/general/lixeira.svg";
import editIcon from "/public/images/general/editar.svg";
import { WarningModal } from "components/Main/utils/Modals/WarningModal";

export function ProductActions () {
  const [hasDeleteActionDone, setHasDeleteActionDone] = useState(false)

  return (
    <div className='product-img-editable'>
      {hasDeleteActionDone && (
        <WarningModal 
          title="Tem certeza?" 
          textContent="Deseja mesmo excluir seu produto? essa ação não pode ser desfeita."  />
      )}
      <img onClick={() => setHasDeleteActionDone(true)} src={deleteIcon.src} alt="excluir produto" />      
      
      <NextLink href="/access/edit">
        <img src={editIcon.src} alt="editar informações do produto" />
      </NextLink>
    </div>
  )
}