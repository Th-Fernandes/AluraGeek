import ClientHeader from './Header'
import { StyledClientSec } from './styles'
import React from 'react'
import { loginController } from 'controller/isLogged'
import ProductSection from "components/Main/ProductSection/ProductSection.jsx"
import {useRouter} from "next/router"

export default function ClientProducts() {

  const router = useRouter()

  return (
    <>
    {
      loginController.userInfo 
        ? (
            <StyledClientSec>
              <ClientHeader />
        
              <ProductSection
                title=''
                productData={loginController.userInfo}
              />
        
        
              {console.log(loginController.userInfo)}
    
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