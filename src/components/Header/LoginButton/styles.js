import styled from "styled-components";
import colors from "utils/colors.json";

const DefaultHeaderButton = styled.button`
  width: clamp(13.3rem, 15vw, 18.2rem);
  height: 4rem;
  font-size: 1.6rem;
  font-weight: 600;
  transition: 0.25s background-color, 0.5s color;

  @media(min-width: 768px) {
    height: 5.1rem;
    font-weight: 400;
  }   
`

 const DefaultLogButton = styled(DefaultHeaderButton)`
  border: 1px solid ${colors.primary["blue"]};
  color: ${colors.primary["blue"]};

  &:hover {
    background-color: ${colors.primary.blue};
    color: ${colors.neutrals.white};
  }

  &::before {
    content: ${({textContent}) => `'${textContent}'`}
  }

`

const LogoffButton = styled(DefaultHeaderButton)`
  border: 1px solid ${colors.primary["red"]};
  color: ${colors.primary.red};
  font-weight: bold;

  &:hover {
    background-color: ${colors.primary.red};
    color: ${colors.neutrals.white}; 
  }
`

export {DefaultLogButton, LogoffButton}