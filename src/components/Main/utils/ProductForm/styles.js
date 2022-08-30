import styled from "styled-components";
// import colors from "utils/colors.json";

export const StyledProductForm = styled.form`
  padding: 1.6rem ;  

  fieldset {
      border: none;

      & > legend {
        font-size: 2.2rem;
        font-weight: 700;
        margin-bottom: 1.6rem;
      }
    }

    @media(min-width: 768px) {
      padding: 3.2rem 0;  

      fieldset {
        margin: 0 3.2rem ;
      }

    @media(min-width: 1024px) {
      padding: 6.4rem 0;  

      fieldset {
        max-width: 55.9rem;
        margin: 0 auto;
      }
    }
  }
`

export const StyledAdmProduct = styled.div`
  margin-top: 1.6rem;

  & > div {
    &:last-child {
      height: 8.2rem;
      
      & > input {
        word-break: break-all;
      }
    }
  }

  & > div:not(:first-child) { 
    margin-top: 1.6rem;
  }
`