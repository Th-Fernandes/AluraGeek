import { StyledProducts } from "./styles";
import arrowIcon from "img/arrow.svg";
import React from "react";
import { useRouter } from 'next/router'

export default function ProductSection(props) {
  const router = useRouter()

  const products = []
  
  const renderProducts = (quantity) => {
    for(let i = 0; i <= (quantity - 1); i++) {
      products.push(props.productData[i])
    }
  }

  React.useEffect(() => {
    console.log(window.innerWidth)
  }, [])

  return (
    <StyledProducts>
      {renderProducts(4)}
      <div className="products-container">
      <header>
        <h2>{props.title}</h2>

        <span className="all-products-link">
          <a href="#">Ver tudo</a>
          <img src={arrowIcon.src} alt={`Selecione essa opção para ver todos os produtos sobre ${props.title}`} />
        </span>
      </header>

      <ul className="products">
        {
          products.map((element, index) => {
            return  (
              <li className="product" key={index}>
                <img 
                  src={element.thumb} 
                  alt={element.description} 
                />
        
                <span className="product-description">
                  <p className="product-name">{element.name}</p>
                  <p className="product-price">{element.price}</p>
                  <a 
                    onClick={() => router.push('./product')}
                  > ver tudo </a>
                </span>
              </li>
            )
          })
        }
      </ul>
      </div>
    </StyledProducts>
  )
}