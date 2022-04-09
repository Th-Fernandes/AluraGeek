import ClientHeader from './Header'
import { StyledClientSec } from './styles'
import React from 'react'
import { loginController } from 'controller/isLogged'
import ProductSection from "components/Main/ProductSection/ProductSection.jsx"

export default function ClientProducts() {

  return (
    <StyledClientSec>
      <ClientHeader />

      <ProductSection
        title=''
        productData={loginController.userInfo.products}
      />

    </StyledClientSec>
  )
}