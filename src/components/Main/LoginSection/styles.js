import styled from "styled-components"
import colors from "utils/colors.json"

export const StyledLogin = styled.form`
  width: min(42.3rem, 90%);
  height: 29.1rem;

  & > fieldset {
    border: none;

    & > legend {
      text-align: center;
      font-size: 1.8rem;
      font-weight: 700;
      margin-bottom: 2.4rem;
    }

    & > .login-input {
      
      background-color: ${colors.neutrals["white"]};
      margin-bottom: 2.4rem;

      & > input {
        padding-left: 1.2rem;
        width: 100%;
        height: 6.313rem;
      }

      & > label {
        opacity: 0;
        display: none;
      }

      & > input[type="password"] {
        font-size: 2rem;
        letter-spacing: 0.25rem;

        &::placeholder {
          font-size: 1.4rem;
          letter-spacing: 0rem;
        }
      }
    }

    & > button {
      width: 100%;
      background-color: ${colors.primary["blue"]};
      color: ${colors.neutrals["white"]};
      height: 6.2rem;
      font-size: 1.8rem;
      font-weight: 600;
    }
  }
`