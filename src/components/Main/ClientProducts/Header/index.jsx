import {StyledHeader} from './styles'
import {useRouter} from 'next/router'
import { supabase } from 'utils/supabaseClient'
import React from 'react'

export default function ClientProducts() {
  const router = useRouter()


  //console.log(supabase.auth.session().user.id)
  
  return (
    <StyledHeader>
      <h1>Todos os produtos</h1>
      <button
        onClick={() => router.push('/access/admin') }
      >
        Adicionar produto
      </button>
    </StyledHeader>
  )
}