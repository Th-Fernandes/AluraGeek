import styled from "styled-components";
import colors from "utils/colors.json";

export const SignActionsFormContainer = styled.form`
  width: min(42.3rem, 90%);

  & > fieldset {
    border: none;

    & > legend {
      margin-bottom: 1.6rem;
      text-align: center;
      font-size: 1.8rem;
      font-weight: 700;
    }

    & > .auth-error {
      display: block;
      margin-bottom: 1.6rem;
      text-align: center;
      font-weight: 700;
      color: red;
      font-size: 1.25rem;
    }

    & > .login-input { 
      background-color: ${colors.neutrals["white"]};
      margin-bottom: 1.6rem;

      @media(min-width: 1024px) {
        margin-bottom: 2.4rem;
      }

      & > input {
        padding-left: 1.2rem;
        height: 6.313rem;
      }

      & > label {
        opacity: 0;
        display: none;
      }

      & > input[type="password"] {
        font-size: 2.4rem;

        &::placeholder {
          font-size: 1.4rem;
        }
      }
    }

    & > button {
      width: 100%;
      background-color: ${colors.primary["blue"]};
      color: ${colors.neutrals["white"]};
      height: 6.2rem;
      font-size: 1.4rem;
      font-weight: 600;

      @media(min-width: 1024px) {
        font-size: 1.8rem;
      }
    }
`