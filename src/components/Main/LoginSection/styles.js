import styled from "styled-components"
import colors from "utils/colors.json"

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
  position: fixed;
  z-index: 999;
  inset: 0;
  background-color: rgba(0, 0,0 , 0.6);
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .modal-content {
    max-width: 48.9rem;
    background-color: ${colors.neutrals['white']};
    border-radius: 1.6rem;
    height: 30rem;
    padding: 3.2rem;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;

    & > article {
      & > h3 {
        font-size: 3.5rem;
        margin-bottom: 1.2rem;
      }
  
      & > p {
        font-size: 1.6rem;
        line-height: 2.5rem
      }
    }

    & > button {
      width: min(30rem, 90%);
      background-color: ${colors.primary.blue};
      height: 5rem;
      margin: 0 auto;
      font-size: 2rem;
      color: ${colors.neutrals.white};
      font-weight: bold;
    }
  }

  @media(max-width: 489px) {
    align-items: end;

    .modal-content {
      border-radius: 6.4rem 6.4rem 0 0 ;
    }
  }

`

export { ModalEmail, StyledLogin}
