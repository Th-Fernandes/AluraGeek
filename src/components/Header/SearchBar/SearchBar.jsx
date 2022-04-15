import { StyledSearchBar } from "./styles";
import Image from 'next/image';
import searchIcon from "../../../../public/images/general/lupa.svg"
import React from "react";
import { supabase } from "utils/supabaseClient"

export default function SearchBar(props) {
  const [searchClick, setSearchClick] = React.useState(false)
  const [productsData, setProductsData] = React.useState()
  //cancelar o comportamento padrão do formulario de atualizar a pag ao dar submit
  const handleSubmit = event => {
    event.preventDefault()
  }

  React.useEffect( async () => {
    const { data, error } = await supabase
    .from('products')
    .select('*')
    .then((response) => {
      setProductsData(response.data)
      return response.data
    })
  }, [])

 

  const searchData = (data, input) => {
    let productos = [];
    
    for (let products of data) {
      //console.log(products)
      let filterTitle = products.items.map(product => {
        const findIndex = product.name.indexOf(input)

        if (findIndex >= 0) {
          return product
        }
        return null
      })
      //SearchController.pushProducts =  {items: filterTitle}
       
      
      productos.push({items: filterTitle})

      if(productos.length > 3) {
        productos.splice(0, 1)
      }
      console.log(productos)
      props.searchData(productos)
      //console.log(SearchController.getProducts) 
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