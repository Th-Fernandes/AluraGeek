import styled from "styled-components";
import colors from "utils/colors.json";

export const StyledProducts = styled.section`
  background-color: ${colors.neutrals["white-300"]};
  padding 6.4rem 0 3.2rem;

  .products-container {
    max-width: 113.6rem;
    margin: 0 auto;
    

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
  
    .products {
      display: grid;
      grid-template-columns: repeat(6, 19.2rem);
      
  
      & .product {
        & .product-description {
          margin-top: 0.8rem;
  
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
    }
  }

  @media(max-width: 1024px) and (min-width:768px) {
    padding: 1.6rem 3.2rem;

    .products-container {
      & .products {
        display: flex;
        flex-wrap: wrap;
    
        & .product {
          margin: 0 auto;
          & > img {
            width: 16.4rem;
          }
        }
      }
     }
  }

  @media(max-width: 425px) {
    padding: 3.2rem 1.6rem; 
    .products-container {
      

      & .products {
        grid-template-columns: repeat(2, 19.2rem);

        & .product {
          margin: 0 auto;
          & > img {
            width: 15.6rem;
          }
        }
      }
    }
  }

  @media(max-width: 320px) {
    & .products {
      overflow-x: auto;
    }
  }
`