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
`

const LogoffButton = styled(HeaderButtonBasis)`
  background-color: #cf142b ;
  color: ${colors.neutrals['white']};
  font-weight: bold;
`

export {DefaultLogButton, LogoffButton}