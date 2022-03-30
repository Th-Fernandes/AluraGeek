import React from "react";
import {StyledUserData} from "./styles";


export default function UserContactData() {
  const [button, setButton] = React.useState(true)

  const handleInputChange = (element) => {
    const charQuantity = element.target.value.length;
    if (charQuantity > 0) setButton(false)
  }

  return (
    <StyledUserData
      onSubmit={event => event.preventDefault()}
    >
      <fieldset>
        <legend>Fale conosco</legend>

        <p className="username-container">
          <label htmlFor="username">Nome</label>
          <input 
            type="text"   
            id='username' 
            maxLength='40'
            onChange={(element) => {
              const charQuantity = element.target.value.length;
              if (charQuantity > 0) setButton(false)
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
            required 
          />
        </p>
      </fieldset>

      <button type="submit" disabled={button}>Enviar mensagem</button>
    </StyledUserData>
  )
}