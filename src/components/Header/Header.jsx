import { StyledHeader } from "./styles";
import SearchBar from "./SearchBar/SearchBar";
import LoginButton from "./LoginButton/LoginButton";
import Image from 'next/image';
import logo from "../../../public/images/general/logo.svg";
import searchIcon from "../../../public/images/general/lupa-preta.svg";
import React from 'react';
import { useRouter } from "next/dist/client/router";
import { supabase } from "utils/supabaseClient";

export default function Header(props) {
  const router = useRouter()

  const [logoDimensions, setLogoDimensions] = React.useState({ width: 176, height: 50 })
  // responsável por alterar o tamanho da logo do header. Recorri a essa solução pois 
  // no css puro (./styles.js) não estava funcionando.
  React.useEffect(() => {
    const logoSize = () => {
      const widthScreen = window.innerWidth
      if (widthScreen <= 1023) {
        setLogoDimensions({ width: 100, height: 28, screenWidth: widthScreen })
        return
      }
      setLogoDimensions({ width: 176, height: 50, screenWidth: widthScreen })
    }

    logoSize()

    window.addEventListener('resize', () => {
      logoSize()
    })
  }, [])

  return (
    <>
    
      <StyledHeader>
        <div className='search-container'>
          <Image
            style={{cursor: 'pointer'}}
            onClick={() => router.push('/')}
            src={logo.src}
            alt="logo da AluraGeek: um controle azul de console, acompanhado da palavra 'Alura' em azul e 'Geek' em preto. "
            width={logoDimensions.width}
            height={logoDimensions.height}
          />
          <SearchBar searchData={props.searchData} />
        </div>
        <LoginButton />
        {
          logoDimensions.screenWidth <= 425
            ? <Image src={searchIcon.src} width='24' height='24' />
            : console.log()
        }
    </StyledHeader>
    </>
  )
}