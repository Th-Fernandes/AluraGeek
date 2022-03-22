export default function UserContactData() {
  return (
    <form>
      <fieldset>
        <legend>Fale conosco</legend>

        <p>
          <label htmlFor="username">Nome</label>
          <input type="text" id='username' />
        </p>
        
        <p>
          <label htmlFor="userMessage">Diga para nós o motivo de seu contato</label>
          <input type="text" id='userMessage' />
        </p>
      </fieldset>

      <button type="submit">Enviar mensagem</button>
    </form>
  )
}