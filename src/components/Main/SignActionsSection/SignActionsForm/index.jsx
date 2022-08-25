import { BrandButton } from "components/utils/Buttons/BrandButton";
import { useState } from "react";
import { SignActionsFormContainer } from "./styles";
import { getUserInput } from "helpers/get-user-input";
import { InputContent } from "components/utils/InputContent";

/* 
  troca a estrutura <p> <input/> </p> para o component InputContent
  remover a estilização referente a antiga estrutura
*/

export function SignActionsForm({ handleSignIn, handleSignUp, authError, signType, isInputSubmitted }) {
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

        <InputContent
          onChange={element => getUserInput(element, setInputData)}
          inputId="loginEmail"
          label="Escreva seu email"
          inputType="email"
          name="email"
          placeholder="exemplo@gmail.com"
          required={true}
        />

        <InputContent
          onChange={element => getUserInput(element, setInputData)}
          inputId="loginPassword"
          label="Escreva sua senha"
          inputType="password"
          placeholder="********"
          name="password"
          required={true}
        />
        <BrandButton textContent="Entrar" isLoading={isInputSubmitted} />
      </fieldset>
    </SignActionsFormContainer>
  )
}