import {StyledLogin} from "./styles.js"
import React from "react";
import { useRouter } from 'next/router'
import { supabase } from "utils/supabaseClient"

export default function LoginSection() {
  const [inputData, setInputData] = React.useState()
  const [signType, setSignType] = React.useState('signIn')
  const [authError, setAuthError] = React.useState()

  const router = useRouter()

  const handleUserInput = (element, dataName) => {
      const userInput = element.target.value
      
      setInputData({...inputData, [dataName]: userInput }) 
      console.log(inputData)
  }

  const handleSignIn = async () => {
    const { error: signInError } = await supabase.auth.signIn(inputData)
    if (signInError) setAuthError(signInError.message)
    router.push('../../')
  }

  const handleSignUp = async () => {
    const {error: signUpError } = await supabase.auth.signUp(inputData)
    if (signUpError) setAuthError(signUpError.message)
  }


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
        onSubmit={event => {
          event.preventDefault()

          if(signType === 'signIn') handleSignIn()
          if(signType === 'signUp') handleSignUp()
          
          return`operação concluida`
        }
      }
     >
       <fieldset>
          {
            signType === 'signIn' 
              ? <legend>Iniciar sessão</legend> 
              : <legend>Criar conta</legend>
          }

          {authError ? <small className="auth-error">{authError}</small> : null}


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