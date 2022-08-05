import { useRouter } from 'next/router';
import { useState } from "react";
import { supabaseAuth } from "helpers/supabase-auth-actions";
import { SignActionsContainer } from "./styles.js";
import { SignActionsForm } from "components/Main/SignActionsSection/SignActionsForm";
import { InfoModal } from 'components/Main/utils/InfoModal';
import { TogglerSignType } from './TogglerSignType/index.jsx';

export function SignActionsSection() {
  const router = useRouter();
  const [signType, setSignType] = useState('signIn');
  const [isInputSubmitted , setIsInputSubmitted] = useState(false);
  const [authError, setAuthError] = useState();
  const [isUserSignedUp, setIsUserSignedUp] = useState(false);

  async function handleSignIn({ email, password }) {
    setIsInputSubmitted(true)

    supabaseAuth.signIn({
      email,
      password,
      handleError: (signInError) => {
        setIsInputSubmitted(false)
        setAuthError(signInError) 
      },
      thenDo: () => {
        setIsInputSubmitted(false)
        router.push('/')
      }
    })
    
  }

  async function handleSignUp({ email, password }) {
    setIsInputSubmitted(true)

    supabaseAuth.signUp({
      email,
      password,
      handleError: (signUpError) => setAuthError(signUpError),
      thenDo: () => {
        setIsInputSubmitted(false) 
        setIsUserSignedUp(true)
      }
    })
  }

  return (
    <SignActionsContainer>
      <SignActionsForm
        handleSignIn={handleSignIn}
        handleSignUp={handleSignUp}
        authError={authError}
        signType={signType}
        isInputSubmitted={isInputSubmitted}
      />

      <TogglerSignType 
        signType={signType}
        setSignType={setSignType}
      />

      {
        isUserSignedUp &&
        <InfoModal
          title="Quase lá!"
          textContent="basta apenas você confirmar o cadastro no seu email
          para o acesso a sua conta ser liberado."
        />
      }
    </SignActionsContainer>
  )
}