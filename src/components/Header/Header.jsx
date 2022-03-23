import logo from "img/logo.svg";
import Image from 'next/image';
import LoginButton from "./LoginButton/LoginButton";
import SearchBar from "./SearchBar/SearchBar";
import { StyledHeader } from "./styles";
import React from 'react';
import searchIcon from "img/lupa-preta.svg"

export default function Header() {
  
  const [logoDimensions, setLogoDimensions] = React.useState({width: 176, height: 50})
  // responsável por alterar o tamanho da logo do header. Recorri a essa solução pois 
  // no css puro (./styles.js) não estava funcionando.
  React.useEffect(() => {
      window.addEventListener('resize', () => {
        const widthScreen = window.innerWidth
        if(widthScreen <= 1023) {
          setLogoDimensions({width: 100, height: 28, screenWidth: widthScreen})
          return
        }
        setLogoDimensions({width: 176, height: 50, screenWidth: widthScreen})
      })
  }, [])
//console.log(logoDimensions.width)
  
  return (
    <StyledHeader>
      <div className='search-container'>
        <Image 
          src={logo.src}
          alt="logo da AluraGeek: um controle azul de console, acompanhado da palavra 'Alura' em azul e 'Geek' em preto. "
          width={logoDimensions.width}
          height={logoDimensions.height}
        />
        <SearchBar />
      </div>
      <LoginButton />
      {
      logoDimensions.screenWidth <= 425 
        ? <Image src={searchIcon.src} width='24' height='24' />
        : console.log()
      }
    </StyledHeader>
  )
}