import { StyledSearchBar } from "./styles";
import Image from 'next/image';
import searchIcon from "img/lupa.svg"
import { useState } from "react";

export default function SearchBar() {
  //cancelar o comportamento padrão do formulario de atualizar a pag ao dar submit
  const handleSubmit = event => {
    event.preventDefault()
  }

  const [searchClick, setSearchClick] = useState(false)

  return (
    <StyledSearchBar 
      isClicked={searchClick} 
      onSubmit={handleSubmit}
      onBlur={() => setSearchClick(false)}
    >
      <label htmlFor="barraPesquisa"></label>
      <input 
        onClick={() => setSearchClick(true)}
        
        id="barraPesquisa"
        type="text"
        placeholder="O que deseja encontrar?"
      />

      <Image 
        src={searchIcon.src}
        width="17"
        height="17"
      />
    </StyledSearchBar>
  )
}