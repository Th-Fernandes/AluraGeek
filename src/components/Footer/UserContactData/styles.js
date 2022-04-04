import styled from "styled-components";
import colors from "utils/colors.json";

export const StyledUserData = styled.form`
  width: 56rem;

  > fieldset {
    border: none;

    & > legend {
      font-size: 1.6rem;
      font-weight: 700;
      margin-bottom: 0.8rem;
    }

    & > small {
      display: inline-block;
      font-size: 1.4rem;
      margin-bottom: 1.2rem;
      color: red;
      display: none;
      opacity: 0;
      visibility: hidden;

      &.error-message {
        display: block;
        opacity: 1;
        visibility: visible;
      }
    } 

    & .username-container {
      background-color: ${colors.neutrals["white"]};
      height: 5.6rem;
      display: flex;
      flex-wrap: wrap;
      align-content: space-around;
      padding: 0.8rem 0  0 1.2rem;

      & > input {
        width: 100%;
        font-size: 1.6rem;
        color: ${colors.primary["black"]};
      }
    }

    .error {
      animation: error 1.5s infinite;
    }

    & .user-message {
      background-color: ${colors.neutrals["white"]};
      height: 8.2rem;
      margin-top: 1.6rem;
      padding-left: 1.2rem;
      margin-bottom: 0.8rem;


      & > label {
        opacity: 0;
        visibility: hidden;
      }

      & > input {
        width: 100%;
        font-size: 1.6rem;
        color: ${colors.primary["black"]};
      }
    }
  }

  & > button {
    background-color: ${colors.primary["blue"]};
    color: ${colors.neutrals["white"]};
    width: 16.5rem;
    height: 5.1rem;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  @media(max-width: 425px) {
    padding: 0  0.8rem; 
  }

  @keyframes error {
    25% {
      outline: 2px solid red;
      
    }

    50% {
      outline: none;
    }

    75% {
      outline: 2px solid red;
    }

    100% {
      outline: none
    }
  }
`