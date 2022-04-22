import {DefaultLogButton, LogoffButton} from "./styles";
import { useRouter } from "next/router";
import React from  'react';
import { supabase } from "utils/supabaseClient";

/* 
  1: vai verificar se está na rota 'access/admin' ou 'access/products'
  2: se sim, vai alterar o texto e o estilo do botão
*/

export default function LoginButton(props) {
  const router = useRouter()

  const [accessRouter, setAccessRouter] = React.useState('/access/login')
  const [logoffRoute, setLogoffRoute] = React.useState(false)

  const verifyRoute = () => {
    const adminIndex = (window.location.href).indexOf('/access/admin') >= 0
    const productsIndex = (window.location.href).indexOf('/access/products') >= 0

    if(adminIndex || productsIndex) {
      console.log('MUDA')
      setLogoffRoute(true)
    }
  }
  const handleLogoff = () => {
    supabase.auth.signOut()
    router.push('/')
  }

  React.useEffect(async () => {
    const loginStatus = await supabase.auth.user()

    if(loginStatus){ 
      setAccessRouter('/access/products')
    } else { 
      setAccessRouter('/access/login')
    }

    verifyRoute()
  }, [])

  if(accessRouter === '/access/products' && logoffRoute) {
    return (
      <LogoffButton onClick={handleLogoff}> Sair </LogoffButton>
    )
  } else {
    return (
      <DefaultLogButton
        onClick={() => { router.push(accessRouter) }}
      >
        { 
          accessRouter === '/access/products' 
            ? 'Menu administrador' 
            : 'Login'
        }
      </DefaultLogButton>
    )
  }
}