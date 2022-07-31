import styled from "styled-components";
import colors from "utils/colors.json";

export const StyledProducts = styled.section`
  padding 6.4rem 0 3.2rem;
  min-height: 37.9rem;
   
  .products-container {
    max-width: 113.6rem;
    margin: 0 auto;
    position: relative;
    animation: up 0.75s;

    & > header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1.6rem;
  
      & > h2 {
        font-size: 3.2rem;
      }
  
      & .all-products-link {
        display: flex;
        align-items: center;
        cursor: pointer;
  
        & > a {
          text-decoration: none;
          color: ${colors.primary["blue"]};
          font-weight: 700;
          font-size: 1.6rem;
          margin-right: 1.2rem;
        }
      }
    }
  }

  @media(max-width: 1136px) { padding-inline: 1.6rem;}

  @keyframes up {
    0% {
      top: -80px;
    }


    100% {
      top: 0;

    }
  }
`

export const ProductsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(${({gridRows}) => gridRows}, calc( 17.6rem + 1.6rem));

  & .product {
    transition: 0.12s transform;

    &:hover {
      
      transform: scale(1.1);
      z-index: 999;
    }

    & > img {
      cursor: pointer;


    }

    & .product-description {
      margin-top: 0.8rem;
      margin-right: 1.6rem;

      & .product-name {
        font-weight: 500;
        font-size: 1.4rem;
      }

      & .product-price {
        font-weight: 700;
        font-size: 1.6rem;
      }

      & > a {
        text-decoration: none;
        font-size: 1.6rem;
        font-weight: 700;
        color: ${colors.primary["blue"]}
      }
    }
  }

  @media(max-width: 768px) { 
    grid-template-columns: repeat(${({gridRows}) => gridRows}, calc( 16.4rem + 1.6rem));
    
    .product {
      & > img {
        width: 16.4rem;
        cursor: pointer;
      }
    }
  }

  @media(max-width: 790px) {
      display: flex;
      align-content: space-between;
      flex-wrap: wrap;
      min-height: 49.8rem;

      & > .product {
        margin-right:1.6rem;
      }
  }

  @media(max-width: 425px) { 
    grid-template-columns: repeat(${({gridRows}) => gridRows}, calc( 15.6rem + 1.6rem));

    .product {
      & > img {
        width: 15.6rem;
      }
    }
  }
`