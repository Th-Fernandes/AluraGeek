import {StyledLogin} from "./styles.js"

export default function LoginSection() {
  return (
    <section
      style={{
        height: "47.3rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
     <StyledLogin 
        onSubmit={event => event.preventDefault()}
     >
       <fieldset>
         <legend>Iniciar sessão</legend>

         <p className="login-input">
           <input type="email" id="loginEmail" placeholder="Escreva seu email" required />
           <label htmlFor="loginEmail">Entre com seu email</label>
         </p>

         <p className="login-input">
           <input type="password" id="loginPassword" placeholder="Escreva sua senha" required />
           <label htmlFor="loginEmail">Entre com sua senha</label>
         </p>

         <button type="submit"> Entrar </button>
       </fieldset>
     </StyledLogin>
    </section>
  )
}