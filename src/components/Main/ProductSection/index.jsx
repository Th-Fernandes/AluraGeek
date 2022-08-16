import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import { StyledProducts, ProductsList } from "./styles";
import arrowIcon from "/public/images/general/arrow.svg";
import deleteIcon from "/public/images/general/lixeira.svg";
import editIcon from "/public/images/general/editar.svg";

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

        <ProductsList gridColumns={products.length}>
          {
            products &&
            products.map(({name, thumb, alt, price}) => {
              return (
                <li
                  onClick={() => router.push(`./product?name=${name}`)}
                  className="product"
                  key={`${name}-${price}`}>

                  <div className="product-img-container">
                    {
                      isEditable && (
                        <div className='product-img-editable'>
                          <img src={deleteIcon.src} alt="editar informações do produto" />
                          <img src={editIcon.src} alt="excluir produto" />
                        </div>
                      )
                    }

                    <img
                      className='product-img'
                      src={thumb}
                      alt={alt}
                    />
                  </div>

                  <span className="product-description">
                    <p className="product-name">{name}</p>
                    <p className="product-price">{price}</p>
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