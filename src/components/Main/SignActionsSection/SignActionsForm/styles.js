import styled from "styled-components";
// import colors from "utils/colors.json";

export const SignActionsFormContainer = styled.form`
  width: min(42.3rem, 90%);

  & > fieldset {
    border: none;

    & > legend {
      margin-bottom: 1.6rem;
      font-size: 1.8rem ;
      font-weight: 700;
      text-align: center;
    }

    & > .auth-error {
      display: block;
      margin-bottom: 1.6rem;
      text-align: center;
      font-weight: 700;
      color: red;
      font-size: 1.25rem;
    }

    & > div {
      /* <InputContent */
      margin-bottom: 1.6rem;

      @media(min-width: 1024px) {
        margin-bottom: 2.4rem;
      }
    }
  }
`