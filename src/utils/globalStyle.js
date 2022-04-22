import { createGlobalStyle } from "styled-components";
import colors from 'utils/colors.json'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root, button, input {
    font-family: 'Raleway', sans-serif;
  }

  p::selection, h1::selection, h2::selection, h3::selection, h4::selection, img::selection {
    color: black;
    background-color: ${colors.primary['blue']};
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

  @keyframes legendFade {
    from {
      opacity: 0;
      font-size: 0;
      transform: rotate(20deg)
    }

    to {
      opacity: 1;
      font-size: 1.8rem;
      transform: rotate(0)
    }
  }
`

