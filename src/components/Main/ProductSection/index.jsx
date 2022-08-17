import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import { StyledProducts, ProductsList } from "./styles";
import { ProductActions } from './ProductActions';
import arrowIcon from "/public/images/general/arrow.svg";
import { NextLink } from 'components/utils/NextLink';

export function ProductSection({productData, isEditable}) {
  const router = useRouter();
  let [products, setProducts] = useState([]);

  function renderProducts(quantity){
    const { items } = productData;
    const filterByQuantity = items.filter((product, index) => index < quantity);
    setProducts(filterByQuantity);
  };

  useEffect(() => {
    function setDisplayableProducts()  {
      const { innerWidth } = window;

      if (innerWidth <  768 ) renderProducts(4);
      if (innerWidth >= 768 ) renderProducts(5);
      if (innerWidth >= 1444) renderProducts(6);
    }

    setDisplayableProducts();
    
    let time = null;

    window.addEventListener('resize', () => {
      clearTimeout(time);

      time = setTimeout(() => setDisplayableProducts(), 150);
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

        <ProductsList gridColumns={products.length}  isEditable={isEditable}>
          {
            products &&
            products.map(({name, thumb, alt, price}) => {
              return (
                <li                
                  className="product"
                  key={`${name}-${price}`}>

                  <div className="product-img-container">
                    { isEditable && <ProductActions/> }
                    <img
                      onClick={() => router.push(`/product?name=${name}`)}
                      className='product-img'
                      src={thumb}
                      alt={alt}
                    />
                  </div>

                  <span className="product-description">
                    <p className="product-name">{name}</p>
                    <p className="product-price">{price}</p>
                    <NextLink href={`/product?name=${name}`}>ver tudo</NextLink>
                  </span>
                </li>
              )
            })
          }
        </ProductsList>
      
    </StyledProducts>
  )
}