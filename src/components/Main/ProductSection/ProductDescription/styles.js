import styled from "styled-components";
import colors from "utils/colors.json";

export const ProductDescriptionContainer = styled.li`
  .product-img-container {
    transition: 0.2s transform;
    cursor: pointer;

    @media(min-width: 1024px) {
      &:hover {
        transform: ${({ isEditable }) => !isEditable && "scale(1.05)"};
      }
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
`