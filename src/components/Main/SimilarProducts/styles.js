import styled from "styled-components";
import colors from "utils/colors.json";
import product from "img/star-wars-product.svg";

export const StyledSimilar = styled.section`
  width: 100%;
  padding: 0 1.6rem;

  > h2 {
    font-size: 2.2rem;
    margin-bottom: 1.6rem;
  }

  .similar-products {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    min-height: 51.4rem;

    & .similar-product {
      max-height: 24.9rem;

      & > img {
        display: block;
        background: url(${product.src});

        width: 15.6rem;
        height: 17.4rem;
      }

      & > article {
        margin-top: 0.8rem;

        & > h3 {
          font-size: 1.4rem;
          font-weight: 500;
        }

        & > p {
          margin-block: 0.8rem;
          font-weight: 700;
          font-size: 1.6rem;
        }

        & > a{
          color: ${colors.primary["blue"]};
          text-decoration: none;
          font-weight: 700;
          font-size: 1.4rem;
        }
      }
    }
  }

  @media(min-width: 768px) {
    padding: 0 3.2rem 3.2rem;
    margin-top: 6.4rem;

    .similar-products {
      min-height: auto;
    }
  }

  @media(min-width: 1440px) {
    width: 113.6rem;
    margin: auto;
    padding: 6.4rem 0 3.2rem;

    > h2 {
      width: 100%;
    }

    .similar-products {
      width: 100%;
    }
  }
`