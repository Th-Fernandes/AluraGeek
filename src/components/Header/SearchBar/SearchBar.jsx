import { FormSearchBar } from "./styles";
import SearchIcon from 'next/image';
import searchIcon from "../../../../public/images/general/lupa.svg";
import { useEffect, useState } from "react";
import { supabase } from "utils/supabaseClient";

export default function SearchBar() {
  function handleCancelSubmitBehavior(event) {
    event.preventDefault()
  }

  return (
    <FormSearchBar
      onSubmit={handleCancelSubmitBehavior}
    >
      <label htmlFor="barraPesquisa"></label>
      <input
        id="barraPesquisa"
        type="text"
        placeholder="O que deseja encontrar?"
      />

      <SearchIcon
        src={searchIcon}
        width={17}
        height={17}
      />
    </FormSearchBar>
  )
}