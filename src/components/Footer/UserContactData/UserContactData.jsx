import {StyledUserData} from "./styles"

export default function UserContactData() {
  return (
    <StyledUserData>
      <fieldset>
        <legend>Fale conosco</legend>

        <p className="username-container">
          <label htmlFor="username">Nome</label>
          <input type="text" id='username' />
        </p>
        
        <p className="user-message">
          <label htmlFor="userMessage">Diga para nós o motivo de seu contato</label>
          <input type="text" id='userMessage' placeholder="Escreva sua mensagem" />
        </p>
      </fieldset>

      <button type="submit">Enviar mensagem</button>
    </StyledUserData>
  )
}