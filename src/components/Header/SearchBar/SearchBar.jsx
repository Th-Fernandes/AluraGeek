import { StyledSearchBar } from "./styles";
import Image from 'next/image';
import searchIcon from "img/lupa.svg"
import React from "react";

/*
- searchBar:
  1: adicionar um evento de onKeyUp e salvar os dados do input
  2: pegar os dados, e comparar com o nome dos produtos (db.json)
  3: se o input do usuário coincidir com algum título de produto,
     imprimir na tela os produtos correspondentes
*/

export default function SearchBar() {
  const [searchClick, setSearchClick] = React.useState(false)
  const [productsData, setProductsData] = React.useState()
  //cancelar o comportamento padrão do formulario de atualizar a pag ao dar submit
  const handleSubmit = event => {
    event.preventDefault()
  }

  React.useEffect(() => {
    fetch('http://localhost:5001/products')
      .then(async response => {
        const data = await response.json()
        setProductsData(data)
        
      })
  }, [])

  const searchData = (data, input) => {
    console.log('passei por aqui')
      const productsCategories = ['starwars', 'console', 'diversos']
      let index = 0
      console.log(data)

      for(let category of data) {
        const products = category[ productsCategories[index] ]
        products.filter(product => {
          if(product.name === input) {
            console.log('compatível')
          }
        })

        index++
      }
  } 
  

  return (
    <StyledSearchBar 
      isClicked={searchClick} 
      onSubmit={handleSubmit}
      onBlur={() => setSearchClick(false)}
    >
      <label htmlFor="barraPesquisa"></label>
      <input 
        onClick={() => setSearchClick(true)}
        onChange={element => {
          const inputValue = element.target.value
          searchData(productsData, inputValue)
        }}
        
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