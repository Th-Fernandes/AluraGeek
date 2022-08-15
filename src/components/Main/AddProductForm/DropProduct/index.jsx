import desktopAddItemIcon from "/public/images/general/desktop-add-item.svg";
import mobileAddItemIcon from "/public/images/general/mobile-add-item.svg";
import { DropContainer } from "./style"
import { useEffect, useState } from "react";

export function DropProduct({setUserProductImg}) {
  const [dropIcon, setDropIcon] = useState(/* img path */);


  useEffect(()=>{
    function changeDropIconByWidth() {
      const { innerWidth } = window;

    innerWidth < 768 
      ? setDropIcon(mobileAddItemIcon.src)
      : setDropIcon(desktopAddItemIcon.src)

    window.addEventListener('resize', changeDropIconByWidth ) 
    }

    changeDropIconByWidth()  
  },[])

  return (
    <DropContainer>
      <div className="drop-product-content">
        <label htmlFor="">
          <img src={dropIcon} alt="adicione aqui a imagem de seu produto." />
          <p>Adicionar uma imagem para o produto</p>
        </label>
        <input type="file" onChange={event => setUserProductImg(event.target.files[0])} />
      </div>

      <div className="fileOption">
        <span>ou</span>
        <button className="fileSearchButton">Procure no seu dispositivo</button>
      </div>
    </DropContainer>
  )
}