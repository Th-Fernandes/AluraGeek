import ClientHeader from './Header'
import { StyledClientSec } from './styles'
import React from 'react'
import ProductSection from "components/Main/ProductSection/ProductSection.jsx"
import {useRouter} from "next/router"
import {supabase} from "utils/supabaseClient";
import DefaultError from '../DefaultError'

export default function ClientProducts() {
  const [isLogged, setIslogged] = React.useState()
  const [userProducts, setUserProducts] = React.useState()
  const router = useRouter()

  React.useEffect(() => {
    const loginSesssion = supabase.auth.session()
    console.log(loginSesssion)

    if(loginSesssion) {
      setIslogged(true) 
    } 
  }, [])

  React.useEffect(async () => {
    const { data, error } = await supabase
      .from('userProducts')
      .select('*')


    if(isLogged) {
      const loggedUserId = supabase.auth.session().user.id
    const filterByUserId = data.filter(user => user.userId === loggedUserId )

    setUserProducts(filterByUserId[0])
    console.log(filterByUserId, supabase.auth.session().user.id)
    }
  }, [])

  if(isLogged) {
    return (
      <StyledClientSec>
        <ClientHeader />
          {
            userProducts &&
            <ProductSection
                title='Meus produtos'
                productData={userProducts}
              />
          }
        
      </StyledClientSec>
    )
  } else {
    return (
      <>
        <DefaultError 
          title="Acesso negado :0"
          description="Você precisa primeiro realizar o login para acessar essa página"
          button={{
            router: '/access/login',
            textContent: 'ir para a página de login'
          }}
        />
      </>
    )
  }
}

