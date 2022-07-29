import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import { DefaultLogButton, LogoffButton } from "./styles";
import { supabase } from "utils/supabaseClient";

export default function LoginButton() {
  const router = useRouter();
  const [accessRouter, setAccessRouter] = useState('/access/login');
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [actualPath, setActualPath] = useState();

  function handleLogoff() {
    supabase.auth.signOut();
    router.push('/');
  };

  useEffect(() => {
    const getPath = window.location.pathname
    setActualPath(getPath)
  }, [])

  useEffect(() => {
    const hasUserSection = supabase.auth.user()

    hasUserSection
      ? (setAccessRouter('/access/products'), setIsUserLogged(true))
      : setAccessRouter('/access/login')
  }, [])

  return (
    <>
      {
        actualPath === '/access/products' && isUserLogged
          ? <LogoffButton onClick={handleLogoff}> Sair </LogoffButton>
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
