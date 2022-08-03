import { useRouter } from 'next/router';
import { useState } from "react";
import { supabaseAuth } from "helpers/supabase-auth-actions";
import { ModalEmail, StyledLogin } from "./styles.js";
import { InfoModal } from 'components/main/utils/InfoModal';


export default function LoginSection() {
  const [inputData, setInputData] = useState();
  const [signType, setSignType] = useState('signIn');
  const [authError, setAuthError] = useState();
  const [emailModal, setEmailModal] = useState(false);

  const router = useRouter();

  function handleUserInput(element, dataName) {
    const userInput = element.target.value

    setInputData({ ...inputData, [dataName]: userInput })
    console.log(inputData)
  }

  async function handleSignIn() {
    const {email, password} = inputData;

    supabaseAuth.signIn({
      email,
      password,
      handleError: (signInError) => setAuthError(signInError),
      thenDo: () => router.push('/')
    })
  }

  async function handleSignUp() {
    const {email, password} = inputData;

    supabaseAuth.signUp({
      email,
      password,
      handleError: (signUpError) => setAuthError(signUpError),
      thenDo: () => setEmailModal(true)
    })
  }

  return (
    <section
      style={{
        height: "47.3rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {
        emailModal &&
        <InfoModal
          title="Quase lá!"
          textContent="basta apenas você confirmar o cadastro no seu email
          para o acesso a sua conta ser liberado."
        />
      }

      <StyledLogin
        onSubmit={event => {
          event.preventDefault();

          if (signType === 'signIn') handleSignIn();
          if (signType === 'signUp') handleSignUp();
        }
        }
      >
        <fieldset>
          <legend>{signType === 'signIn' ? 'Iniciar sessão' : 'Criar conta' }</legend>

           {authError && <small className="auth-error">{authError}</small>}
           {authError && console.log('error message')}

          <p className="login-input">
            <input
              onChange={element => handleUserInput(element, 'email')}
              type="email"
              id="loginEmail"
              placeholder="Escreva seu email"
              required />
            <label htmlFor="loginEmail">Entre com seu email</label>
          </p>

          <p className="login-input">
            <input
              onChange={element => handleUserInput(element, 'password')}
              type="password"
              id="loginPassword"
              placeholder="Escreva sua senha"
              required />
            <label htmlFor="loginEmail">Entre com sua senha</label>
          </p>

          <button type="submit"> Entrar </button>
          {
            signType === 'signIn'
              ? (
                <small>Não possui uma conta?
                  <span onClick={() => setSignType('signUp')}>
                    crie agora
                  </span>
                </small>
              )

              : (
                <small>Já possui uma conta?
                  <span onClick={() => setSignType('signIn')}>
                    faça login aqui.
                  </span>
                </small>
              )
          }
        </fieldset>
      </StyledLogin>
    </section>
  )
}