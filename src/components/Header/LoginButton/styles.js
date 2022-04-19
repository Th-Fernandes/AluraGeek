import styled from "styled-components";
import colors from "utils/colors.json";

const HeaderButtonBasis = styled.button`
  width: 18.2rem;
  height: 5.1rem;
  font-size: 1.6rem;

  @media(max-width: 768px) {
    font-weight: 600;
  }
`

 const DefaultLogButton = styled(HeaderButtonBasis)`
  border: 1px solid ${colors.primary["blue"]};
  color: ${colors.primary["blue"]};
  transition: 0.35s background-color, 1s color;

  &:hover {
    background-color: ${colors.primary.blue};
    color: ${colors.neutrals.white};
  }

  @keyframes fadeButton {
    to {
      
    }
  }
`

const LogoffButton = styled(HeaderButtonBasis)`
  border: 1px solid ${colors.primary["red"]};
  color: ${colors.primary.red};
  font-weight: bold;
  transition: 0.35s background-color, 0.5s color;

  &:hover {
    background-color: ${colors.primary.red};
    color: ${colors.neutrals.white};
    
  }
`

export {DefaultLogButton, LogoffButton}