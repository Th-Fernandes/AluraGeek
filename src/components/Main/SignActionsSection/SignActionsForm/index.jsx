import { useState } from "react";
import {SignActionsFormContainer} from "./styles"
export function SignActionsForm({handleSignIn, handleSignUp, authError, signType}) {
  const [inputData, setInputData] = useState();

  function handleSubmitUserInput(event) {
    event.preventDefault();

    if (signType === 'signIn') handleSignIn(inputData);
    if (signType === 'signUp') handleSignUp(inputData);
  }

  function handleUserInput(element) {
    const {value, type} = element.target;
    setInputData({ ...inputData, [type]: value });
  }

  return (
    <SignActionsFormContainer
      onSubmit={(event) => handleSubmitUserInput(event)}
    >
      <fieldset>
        <legend>{signType === 'signIn' ? 'Iniciar sessão' : 'Criar conta'}</legend>

        {authError && <small className="auth-error">{authError}</small>}

        <p className="login-input">
          <input
            onChange={element => handleUserInput(element)}
            type="email"
            id="loginEmail"
            placeholder="Escreva seu email"
            required />
          <label htmlFor="loginEmail">Entre com seu email</label>
        </p>

        <p className="login-input">
          <input
            onChange={element => handleUserInput(element)}
            type="password"
            id="loginPassword"
            placeholder="Escreva sua senha"
            required />
          <label htmlFor="loginEmail">Entre com sua senha</label>
        </p>

        <button type="submit"> Entrar </button>
      </fieldset>
    </SignActionsFormContainer>
  )
}