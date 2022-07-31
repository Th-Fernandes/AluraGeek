import { createGlobalStyle } from "styled-components";
import colors from 'utils/colors.json'

export const GlobalStyle = createGlobalStyle`
  // DISPLAY CONFIG
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    
    body {
      main {
        background-color: ${colors.neutrals["white-300"]};
      }
    }
  }

  // SPACING CONFIG
  section, #__next > header {
    padding: 0 1.6rem;

    @media(min-width: 768px) {
      padding: 0 3.2rem;
    }

    @media(min-width: 1440px) {
      max-width: 113.6rem;
      margin: 0 auto;
      padding: 0;
    }
  }
  
  // FONT CONFIG 

  body, button, a {
    font-size: 1.6rem;
    font-family: 'Raleway', sans-serif;
  }

  // RESET CONFIG 
 
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

  // SELECTION CONFIG

  ::selection {
    color: black;
    background-color: ${colors.primary['blue']};
  }
`

