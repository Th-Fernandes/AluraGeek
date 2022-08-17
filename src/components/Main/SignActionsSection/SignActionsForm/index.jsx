import { BrandButton } from "components/utils/Buttons/BrandButton";
import { useState } from "react";
import {SignActionsFormContainer} from "./styles";
import { getUserInput } from "helpers/get-user-input";

export function SignActionsForm({handleSignIn, handleSignUp, authError, signType, isInputSubmitted}) {
  const [inputData, setInputData] = useState();

  function handleSubmitUserInput(event) {
    event.preventDefault();

    if (signType === 'signIn') handleSignIn(inputData);
    if (signType === 'signUp') handleSignUp(inputData);
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
            onChange={element => getUserInput(element, setInputData)}
            type="email"
            id="loginEmail"
            placeholder="Escreva seu email"
            name="email"
            required />
          <label htmlFor="loginEmail">Entre com seu email</label>
        </p>

        <p className="login-input">
          <input
            onChange={element => getUserInput(element, setInputData)}
            type="password"
            id="loginPassword"
            placeholder="Escreva sua senha"
            name="password"
            required />
          <label htmlFor="loginEmail">Entre com sua senha</label>
        </p>

        <BrandButton textContent="Entrar" isLoading={isInputSubmitted} />
      </fieldset>
    </SignActionsFormContainer>
  )
}