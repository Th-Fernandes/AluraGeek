import { StyledProducts } from "./styles";
import arrowIcon from "../../../../public/images/general/arrow.svg";
import React from "react";
import { useRouter } from 'next/router'

export default function ProductSection(props) {
  const router = useRouter()
  const [productsQuantity, setProductsQuantity] = React.useState(4)

  const products = []

  const renderProducts = (quantity) => {
      for (let i = 0; i <= (quantity - 1); i++) {
        const item = props.productData.items[i]
        
        if(item) products.push(item)
      } 
  }

  React.useEffect(() => {
    let time = null
   
    const productRender = () => {
      if( window.innerWidth < 1180) {
        setProductsQuantity(4)
        return
      }
      setProductsQuantity(6)
    }

    productRender()


    window.addEventListener('resize', () => {
      clearTimeout(time)

      time = setTimeout(() => {
        productRender()
      }, 200)
    })

    
  }, [])

  return (
    <StyledProducts>
      {renderProducts(productsQuantity)}
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
              //console.log(element)
              return (
                <li className="product" key={index}>

                  <img
                    src={element.thumb}
                    alt={element.alt}
                  />

                  <span className="product-description">
                    <p className="product-name">{element.name}</p>
                    <p className="product-price">{element.price}</p>
                    <a
                      onClick={() => router.push(`./product?name=${element.name}`)}
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