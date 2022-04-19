import ClientHeader from './Header'
import { StyledClientSec } from './styles'
import React from 'react'
import ProductSection from "components/Main/ProductSection/ProductSection.jsx"
import {useRouter} from "next/router"
import {supabase} from "utils/supabaseClient";

export default function ClientProducts() {
  const [isLogged, setIslogged] = React.useState()
  const router = useRouter()

  React.useEffect(() => {
    const loginSesssion = supabase.auth.session()
    console.log(loginSesssion)

    if(!loginSesssion) {
      router.push('/access/login')  
      return
    }

    setIslogged(true)
  }, [])

  return (
    <>
    {
      isLogged
        ? (
            <StyledClientSec>
              <ClientHeader />
        
              {/* <ProductSection
                title=''
                productData={loginController.userInfo}
              /> */}
        
    
            </StyledClientSec>
        )
       
        : (
          <>
            Você precisa fazer login para acessar essa página
            <button
              onClick={() => router.push('./login')}
            >fazer login</button>
          </>
        )

      
    }
    </>
    
  )
}