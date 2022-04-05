import styled from "styled-components";
import colors from "utils/colors.json";

export const StyledProductForm = styled.form`
padding: 1.6rem 0;  

fieldset {
    border: none;
    margin: 0 1.6rem ;

    & > legend {
      font-size: 2.2rem;
      font-weight: 700;
      margin-bottom: 1.6rem;
    }

    & .drop-product-container {
      height: 13.4rem;

      & > .drop-product-content {
        height: 13.4rem;
        & > input {
          position: relative;
          top: -134px;
          opacity: 0;
          height: 13.4rem;
          width: 100%;
        }
    
        & > label {
        background-color: ${colors.neutrals["white"]};
        height: 13.4rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;
        align-content: center;
        border: 2px dashed ${colors.neutrals["black-200"]};
    
          & > p {
            margin-top: 2.2rem;
            width: 100%;
          }
      }
      }

      & > .fileOption {
        display: none;
        opacity: 0;
        visibility: hidden;
      }
    }
  }

  @media(min-width: 768px) {
    padding: 3.2rem 0;  

    fieldset {
      margin: 0 3.2rem ;
      & .drop-product-container {
        height: 15.2rem;
        display: flex;
        align-items: center; 

        & .drop-product-content {
          height: 15.2rem;
          width: 25.4rem;

          & > label {
            height: 15.2rem;
          }

          & > input {
            height: 15.2rem;
            top: -15.2rem;
          }
        }

        & > .fileOption {
          
          display: block;
          opacity: 1;
          visibility: visible;

          & > span {
            margin-inline: 0.8rem; 
            font-size: 1.6rem;
          }

          & .fileSearchButton {
            width: 23.9rem;
            height: 5.1rem;
            border: 1px solid ${colors.primary["blue"]};
            color: ${colors.primary["blue"]};
            font-size: 1.6rem;
          }
        }
      }
    }

  @media(min-width: 1024px) {
    padding: 6.4rem 0;  


    fieldset {
      max-width: 55.9rem;
      margin: 0 auto;

      & .drop-product-container {
        & .drop-product-content {
          width: 28.2rem;
        }
      }
    }
  }
`

export const StyledAdmProduct = styled.div`
  margin-top: 1.6rem;

  & > div {
    padding: 0.8rem 1.2rem;
    background-color: ${colors.neutrals["white"]};

    &:last-child {
      height: 8.2rem;
      
      & > input {
        height: 100%;
        max-width: 100%;
        word-break: break-all;
      }
    }
  }

  & > div:not(:first-child) { 
    margin-top: 1.6rem;
  }
`