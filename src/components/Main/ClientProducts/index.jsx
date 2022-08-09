import { useState, useEffect} from 'react';
import { ClientProductsContainer } from './styles';
import ClientHeader from './Header';
import ProductSection from "components/Main/ProductSection/ProductSection.jsx";
import {supabaseAuth} from "helpers/supabase-auth-actions";
import {supabaseDatabase} from "helpers/supabase-database-actions";
import DefaultError from 'components/Main/DefaultError';

export default function ClientProducts() {
  const [isLogged, setIslogged] = useState();
  const [userProducts, setUserProducts] = useState();

  useEffect(() => {
    supabaseAuth.getSessionInfo(() => setIslogged(true));
  }, [])

  useEffect(() => {
    if (isLogged) {
      supabaseDatabase.selectAll({
        inTable: 'userProducts',
        thenDo: (data) => {
          const sessionId = supabaseAuth.getSessionInfo().user.id;
          const filterByUserId = data.filter(({userId}) => userId === sessionId);
          setUserProducts(...filterByUserId);
        }
      });
    };  
  }, [isLogged])

  if(isLogged) {
    return (
      <ClientProductsContainer>
        <ClientHeader />
          {
            userProducts &&
            <ProductSection productData={userProducts} />
          }      
      </ClientProductsContainer>
    )
  } else {
    return (
      <>
        <DefaultError 
          title="Acesso negado :("
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

