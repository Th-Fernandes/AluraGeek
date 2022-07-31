import { StyledProducts, ProductsList } from "./styles";
import arrowIcon from "../../../../public/images/general/arrow.svg";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

export default function ProductSection(props) {
  const router = useRouter();
  const [productsQuantity, setProductsQuantity] = useState(4);

  let products = [];

  const renderProducts = (quantity) => {
    const { items } = props.productData
    const filterByQuantity = items.filter((product, index) => index < quantity)
    products = filterByQuantity
  }

  useEffect(() => {
    const productRender = () => {
      if (window.innerWidth >= 1024 && window.innerWidth < 1180) {
        return setProductsQuantity(5)
        
      } else if (window.innerWidth < 1180) {
        return setProductsQuantity(4)
        
      }
      setProductsQuantity(6)
    }

    productRender()

    let time = null

    window.addEventListener('resize', () => {
      clearTimeout(time)

      time = setTimeout(() => {
        productRender()
      }, 50)
    })
    
  }, [])

  return (
    <StyledProducts>
      {renderProducts(productsQuantity)}
        <header>
          <h2>{props.title}</h2>

          <span className="all-products-link">
            <a href="#">Ver tudo</a>
            <img src={arrowIcon.src} alt={`Selecione essa opção para ver todos os produtos sobre ${props.title}`} />
          </span>
        </header>

        <ProductsList gridRows={productsQuantity}>
          {
            products.map((element, index) => {
              return (
                <li
                  onClick={() => router.push(`./product?name=${element.name}`)}
                  className="product"
                  key={index}>

                  <img
                    src={element.thumb}
                    alt={element.alt}

                  />

                  <span className="product-description">
                    <p className="product-name">{element.name}</p>
                    <p className="product-price">{element.price}</p>
                    <a
                    > ver tudo </a>
                  </span>
                </li>
              )
            })
          }
        </ProductsList>
      
    </StyledProducts>
  )
}