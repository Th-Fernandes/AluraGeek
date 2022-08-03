import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import {supabaseAuth} from "helpers/supabase-auth-actions";
import { DefaultLogButton, LogoffButton } from "./styles";

export default function LoginButton() {
  const router = useRouter();
  const [accessRouter, setAccessRouter] = useState('/access/login');
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [actualPath, setActualPath] = useState();

  function handleSignOut() {
    supabaseAuth.signOut({
      thenDo: () => router.push('/')
    })
  };

  useEffect(() => {
    const getPath = window.location.pathname
    setActualPath(getPath)
  }, [])

  useEffect(() => {
    const hasUserSection = supabaseAuth.getUser()

    hasUserSection
      ? (setAccessRouter('/access/products'), setIsUserLogged(true))
      : setAccessRouter('/access/login')
  }, [])

  return (
    <>
      {
        actualPath === '/access/products' && isUserLogged
          ? <LogoffButton onClick={handleSignOut}> Sair </LogoffButton>
          : (
            <DefaultLogButton
              onClick={() => { router.push(accessRouter) }}
              textContent={accessRouter === '/access/products' ? 'Menu administrador' : 'Login'}
            />
          )
      }
    </>
  )
}
