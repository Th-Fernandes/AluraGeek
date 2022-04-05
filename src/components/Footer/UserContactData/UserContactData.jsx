import React from "react";
import {StyledUserData} from "./styles";


export default function UserContactData() {
  const [button, setButton] = React.useState(true)

  const handleInputChange = (element) => {
    const charQuantity = element.target.value.length;
    
    if (charQuantity > 0) {
      const removeErrorBorder = element.target.parentNode.classList.remove('error')
      const RemoveErrorMessage = document.querySelector('small').classList.remove("error-message")
      setButton(false)
      return
    }

    const addErrorBorder = element.target.parentNode.classList.add('error')
    const addErrorMessage = document.querySelector('small').classList.add("error-message")
    
    setButton(true)
  }

  return (
    <StyledUserData
      onSubmit={event => {
        event.preventDefault()
        
        alert('Sua mensagem foi enviada com sucesso. Obrigado pelo contato.')
      }}
    >
      <fieldset>
        <legend>Fale conosco</legend>
        <small >ops! parece que você deixou campos em branco.</small>

        <p className="username-container">
          <label htmlFor="username">Nome</label>
          <input 
            type="text"   
            id='username' 
            maxLength='40'
            onChange={(element) => {
              handleInputChange(element)
            }}
            required
            />
        </p>
        
        <p className="user-message">
          <label htmlFor="userMessage">Diga para nós o motivo de seu contato</label>
          <input 
            type="text" 
            id='userMessage' 
            placeholder="Escreva sua mensagem" 
            maxLength='120'
            onChange={(element) => {
              handleInputChange(element)
            }}
            required 
          />
        </p>
      </fieldset>

      <button type="submit" disabled={button}>Enviar mensagem</button>
    </StyledUserData>
  )
}