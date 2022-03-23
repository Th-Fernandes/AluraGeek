import { createGlobalStyle } from "styled-components";
import colors from "utils/colors.json";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root, button, input {
    font-family: 'Raleway', sans-serif;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  input, button {
    background: transparent;
    border: none;
    outline: none;
  }

  button, a {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`

