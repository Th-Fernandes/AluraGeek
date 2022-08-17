import styled from "styled-components";
import colors from "utils/colors.json";


const DefaultButton = styled.button`
  width: 100%;
  background-color: ${({bgColor}) => colors.buttons[bgColor]};
  color: ${({color}) => colors.neutrals[color]};
  height: 6.2rem;
  font-size: 1.4rem;
  font-weight: 600;
  transition: background 0.25s;

  &:hover {
    background: ${({bgColor}) => colors.buttons[`${bgColor}-hover`]};
  }

  &:focus {
    outline: 3px solid #000;
  }

  @media(min-width: 1024px) {
    font-size: 1.8rem;
  }
`

export default DefaultButton;