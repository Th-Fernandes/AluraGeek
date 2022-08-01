import { StyledProducts, ProductsList } from "./styles";
import arrowIcon from "../../../../public/images/general/arrow.svg";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

export default function ProductSection({productData}) {
  const router = useRouter();
  let [products, setProducts] = useState([]);

  function renderProducts(quantity){
    const { items } = productData;
    const filterByQuantity = items.filter((product, index) => index < quantity);
    setProducts(filterByQuantity);
  };

  useEffect(() => {
    function productRender()  {
      const screenWidth = window.innerWidth

      if (screenWidth < 768  ) renderProducts(4)
      if (screenWidth >= 1444) renderProducts(6)
    }

    productRender()
    
    let time = null;

    window.addEventListener('resize', () => {
      clearTimeout(time);

      time = setTimeout(() => productRender(), 150);
    });
    
  }, [])

  return (
    <StyledProducts>
        <header>
          <h2>{productData.category}</h2>

          <span className="all-products-link">
            <a href="#">Ver tudo</a>
            <img src={arrowIcon.src} alt={`Selecione essa opção para ver todos os produtos sobre ${productData.category}`} />
          </span>
        </header>

        <ProductsList gridColumns={products.length}>
          {
            products &&
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
                    <a> ver tudo </a>
                  </span>
                </li>
              )
            })
          }
        </ProductsList>
      
    </StyledProducts>
  )
}