import styled from "styled-components";
import product from "img/star-wars-product.svg"

export const StyledProductDesc = styled.section`
  > .product-thumb {
    width: 100%;
    height: 19.2rem;
    background: url(${props => props.productThumb}) no-repeat center;
    background-size: cover;
  }

  > article {
    min-height: 18.9rem;
    margin: 1.6rem 1.6rem 3.2rem 1.6rem;

    & > h1 {
      font-size: 2.2rem;
      font-weight: 500;
    }

    & > .preco {
      display: block;
      font-weight: 700;
      font-size: 1.6rem;
      margin-block: 0.8rem ;
    }

    & > p {
      font-size: 1.4rem;
      line-height: 1.6rem;
    }
  }
  
  @media(min-width: 768px) {
    display: flex;
    justify-content: center ;
    padding-top: 3.2rem;

    > .product-thumb {
      width: 25.4rem;
      height: 15.7rem;
      margin-right: 1.6rem;
    }

    > article {
      margin: 0;
      max-width: 43.4rem;
    }
  }

  @media(min-width: 1440px) {
    align-items: center;
    padding-top: 6.4rem;

    > .product-thumb {
      width: 56rem;
      height: 40.3rem; 
    }

    > article {
      max-width: 56rem;

      & > h1 {
        font-size: 5.2rem;
      }

      & > p {
        font-size: 1.6rem;
        line-height: 1.8rem;
      }
    }
  }
  
`
