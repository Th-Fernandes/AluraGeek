import {StyledLogin} from "./styles.js"
import React from "react";
import { useRouter } from 'next/router'
import { loginController } from "controller/isLogged"

export default function LoginSection() {
  const [loginData, setLoginData] = React.useState()
  const [inputData, setInputData] = React.useState()

  const router = useRouter()

  const handleUserInput = (element, dataName) => {
      const userInput = element.target.value
      
      setInputData({...inputData, [dataName]: userInput }) 
      console.log(inputData)
  }

  
  React.useEffect(() => {
    fetch('http://localhost:5000/users')
      .then( async function(response) {
        const data = await response.json()
        setLoginData(data)
      })
  }, [])

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

          for(let login of loginData) {

            const loginCondition = inputData.email  === login.email
            const passwordCondition = inputData.password  === login.password
            
            if(loginCondition && passwordCondition) {
              loginController.loggedUser = login
              console.log(loginController.userInfo)
              router.push('./products')
            }         
          } 
        }
      }
     >
       <fieldset>
         <legend>Iniciar sessão</legend>

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
       </fieldset>
     </StyledLogin>
    </section>
  )
}