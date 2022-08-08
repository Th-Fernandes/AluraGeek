import {StyledProductForm, StyledAdmProduct} from  "./styles";
import InputContent from "components/utils/InputContent";
import React from "react";
import desktopAddItemIcon from "../../../../public/images/general/desktop-add-item.svg"
import mobileAddItemIcon from "../../../../public/images/general/mobile-add-item.svg";

export default function AddProductForm() {
  const [defaultImg, setDefaultImg] = React.useState(mobileAddItemIcon.src)
  const [inputUser, setInputUser] = React.useState()

  const handleInputUser = (element, inputName) => {
    const inputValue = element.target.value
    setInputUser({...inputUser, [inputName]: inputValue})
    console.log(inputUser)
  }

  React.useEffect(() => {
    // muda o ícone da sessão de dropar arquivo dependendo do tamanho da tela
    const changeIcon = () => {
      const widthScreen = window.innerWidth
      if(widthScreen >= 768) {
        setDefaultImg(desktopAddItemIcon.src)
        return
      }
      setDefaultImg(mobileAddItemIcon.src)
    }

    changeIcon()

    window.addEventListener('resize', () => {
      changeIcon()
    })
  }, [])

  return (
    <StyledProductForm
      onSubmit={event => {
        event.preventDefault()
        console.log(inputUser)
      }}
    >
      <fieldset>
        <legend>Adicionar novo produto</legend>

        <div className="drop-product-container">
          <div className="drop-product-content">
            <label htmlFor="">
              <img src={defaultImg} alt="Icone de mais. Coloque aqui a imagem de seu produto." />
              <p>Adicionar uma imagem para o produto</p>
            </label>
            <input type="file" />
          </div>

          <div className="fileOption">
            <span>ou</span>
            <button className="fileSearchButton">Procure no seu Tablet</button>
          </div>
        </div>

        <StyledAdmProduct className="adm-product-info">
            <InputContent 
              onChange={element => handleInputUser(element, 'name')}
              label="Nome do produto" 
              inputId="productNameAdm" 
              inputType="text"/>
       
            <InputContent 
              onChange={element => handleInputUser(element, 'price')}
              label="Preço do produto" 
              inputId="productPriceAdm" 
              inputType="number"/>
         
            <InputContent 
              onChange={element => handleInputUser(element, 'description')}
              label=" " 
              inputId="ProductDescAdm" 
              inputType="text" 
              placeholder="Descrição do produto"/>      
        </StyledAdmProduct>

        <button 
          type="submit"
          style={{
            marginTop: '1.6rem',
            width: "100%",
            backgroundColor: "#2A7AE4",
            color: "#ffffff",
            height: '5.1rem',
            fontSize: '1.6rem',
          }}
        >
            Adicionar produto
        </button>
      </fieldset>
    </StyledProductForm>
  )
}