import styled from "styled-components";
import colors from "utils/colors.json";

export const StyledProductForm = styled.form`
padding-top: 1.6rem;  

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
  }
`

export const StyledAdmProduct = styled.div`
  margin-top: 1.6rem;

  & > div {
    padding: 0.8rem 1.2rem;
    background-color: ${colors.neutrals["white"]};
  }

  & > div:not(:first-child) { 
    margin-top: 1.6rem;
  }
`