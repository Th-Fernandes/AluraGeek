import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import Image from 'next/image';
import Link from "next/link"
import { StyledHeader } from "./styles";
import SearchBar from "./SearchBar/SearchBar";
import LoginButton from "./LoginButton/LoginButton";
import logo from "../../../public/images/general/logo.svg";
import searchIcon from "../../../public/images/general/lupa-preta.svg";

export default function Header() {
  const router = useRouter();
  const [isSearchMobileAble, setIsSearchMobileAble] = useState(false);

  /* VALIDAÇÃO DO MENU DE BUSCA MOBILE */
  useEffect(() => {
    const screenWidth = {
      value: () => window.innerWidth,
      validateSearchMenuMobile: () => {
        screenWidth.value() < 768
          ? setIsSearchMobileAble(true)
          : setIsSearchMobileAble(false)
      }
    }
    const setFirstMenuValidation = screenWidth.validateSearchMenuMobile()

    window.addEventListener('resize', () => {
      screenWidth.validateSearchMenuMobile()
    })
  }, [])

  return (
    <StyledHeader>
      <div className='search-container'>
        <Link href="/">
          <a>
            <img
              className='logo'
              src={logo.src}
              alt="voltar ao menu principal "
            />
          </a>
        </Link>

        <SearchBar />
      </div>
      <LoginButton />
      {isSearchMobileAble && <Image src={searchIcon} />}
    </StyledHeader>
  )
}

