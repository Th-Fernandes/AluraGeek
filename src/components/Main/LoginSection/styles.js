import styled from "styled-components";
import colors from "utils/colors.json";

const StyledLogin = styled.form`
  width: min(42.3rem, 90%);
  height: 29.1rem;

  & > fieldset {
    border: none;

    & > legend {
      text-align: center;
      font-size: 1.8rem;
      font-weight: 700;
      margin-bottom: 2.4rem;
      animation: legendFade 0.5s;
      
    }

    & > .auth-error {
      margin: 0 0 1.2rem 0;
      color: red;
    }

    & > .login-input {
      animation: legendFade 0.75s;
      
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
      animation: legendFade 1s;
    }

    & > small {
      margin-top: 2rem;
      display: block;
      font-size: 1.25rem;
      text-align: center;
      & > span {
        color: ${colors.primary['blue']};
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }


`
const ModalEmail = styled.section`
  display: flex;  
  justify-content: center;
  align-items: end;
  max-width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 999;
  inset: 0;
  padding: 0;
  background-color: rgba(0, 0,0 , 0.5);

  @media(min-width:768px) {
    align-items: center;
  }

  .modal-content {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    max-width: 60rem;
    height: 30rem;
    padding: 3.2rem;
    background-color: ${colors.neutrals['white']};
    border-radius: 1.6rem;

    & > article {
      & > h3 {
        font-size: clamp(2.2rem, 5vw, 3.5rem);
        margin-bottom: 1.2rem;
      }
  
      & > p {
        line-height: 2.5rem;
      }
    }

    & > button {
      width: min(30rem, 90%);
      height: 5rem;
      margin: 0 auto;
      background-color: ${colors.primary.blue};
      color: ${colors.neutrals.white};
      font-weight: bold;
    }
  }
`

export { ModalEmail, StyledLogin}
