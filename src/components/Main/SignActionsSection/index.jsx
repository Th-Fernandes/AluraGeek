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
  const [authError, setAuthError] = useState();
  const [isUserSignedUp, setIsUserSignedUp] = useState(false);

  async function handleSignIn({ email, password }) {
    supabaseAuth.signIn({
      email,
      password,
      handleError: (signInError) => setAuthError(signInError),
      thenDo: () => router.push('/')
    })
  }

  async function handleSignUp({ email, password }) {
    supabaseAuth.signUp({
      email,
      password,
      handleError: (signUpError) => setAuthError(signUpError),
      thenDo: () => setIsUserSignedUp(true)
    })
  }

  return (
    <SignActionsContainer>
      <SignActionsForm
        handleSignIn={handleSignIn}
        handleSignUp={handleSignUp}
        authError={authError}
        signType={signType}
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