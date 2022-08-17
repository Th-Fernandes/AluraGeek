import styled from "styled-components";
import colors from "utils/colors.json";

export const StyledProducts = styled.section`
  padding-block: 1.6rem;

  @media(min-width: 768px) {
    padding-block: 3.2rem;

    &:last-child {
      padding-bottom: 3.2rem;
    }
  }

  @media(min-width: 1024px) {
    padding-block: 6.4rem 3.2rem;
    
    &:last-child {
      padding-bottom: 6.4rem;
    }
  }

    &  header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1.6rem;
  
      & h2 {
        font-size: 2.2rem ;

        @media(min-width: 1024px) {
          font-size: 3.2rem;
        }
      }
  
      & .all-products-link {
        display: flex;
        align-items: center;
        cursor: pointer;
  
        &  a {
          text-decoration: none;
          color: ${colors.primary["blue"]};
          font-weight: 700;
          font-size: 1.6rem;
          margin-right: 1.2rem;
        }
      }
    }
`

export const ProductsList = styled.ul`
  display: grid;
  grid-template-columns: repeat( 2 , 15.6rem);
  gap: 1.6rem;
  margin: 0 auto;
  padding-block: 0.8rem;
  overflow-x: scroll; 

  @media(min-width: 500px) {
    grid-template-columns: repeat(  ${(props) => props.gridColumns} , 17.6rem);
  }

  @media(min-width: 768px) {
    overflow-y: hidden; 
  }

  @media(min-width: 1024px) {
    overflow-x: hidden; 
  }


  & .product {

    .product-img-container {
      transition: 0.2s transform;
      cursor: pointer;

      @media(min-width: 1024px) {
        &:hover {
          transform: ${({isEditable}) => !isEditable && "scale(1.05)"};
        }
      }

      .product-img-editable {
        display: flex;
        justify-content: end;
        gap: 2.4rem; 
        position: relative;
        top: 1rem;
        right: 1rem;
        z-index: 3;
      }

      .product-img {
        margin-top: -1.9rem;         
        width: 14rem;
        height: 17.4rem;

        @media(min-width: 768px) {
          width: 16.4rem;
        }

        @media(min-width: 1024px) {
          width: 17.6rem;
        }
      }
    }

    & .product-description {
      & .product-name {
        font-weight: 500;
        font-size: 1.4rem;
      }

      & .product-price {
        font-weight: 700;
      }

      & > a {
        font-weight: 700;
        color: ${colors.primary["blue"]}
      }
    }
  }
`