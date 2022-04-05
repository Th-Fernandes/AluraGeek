import logo from "img/logo.svg";
import Image from 'next/image';
import LoginButton from "./LoginButton/LoginButton";
import SearchBar from "./SearchBar/SearchBar";
import { StyledHeader } from "./styles";
import React from 'react';
import searchIcon from "img/lupa-preta.svg";
import { useRouter } from "next/dist/client/router";
import { IsLogged } from "controller/isLogged";

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

  const test = new IsLogged()
  console.log(test.loggedUser = {name: 'Fulano da Tilva', password: '123'})

  return (
    <StyledHeader>
      <div className='search-container'>
        <Image
          onClick={() => router.push('../')}
          src={logo.src}
          alt="logo da AluraGeek: um controle azul de console, acompanhado da palavra 'Alura' em azul e 'Geek' em preto. "
          width={logoDimensions.width}
          height={logoDimensions.height}
        />
        <SearchBar />
      </div>
      <LoginButton adminVer={props.adminVer} />
      {
        logoDimensions.screenWidth <= 425
          ? <Image src={searchIcon.src} width='24' height='24' />
          : console.log()
      }
    </StyledHeader>
  )
}