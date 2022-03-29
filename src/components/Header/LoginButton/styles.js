import styled from "styled-components";
import colors from "utils/colors.json";

export const StyledLogButton = styled.button`
  width: 18.2rem;
  height: 5.1rem;
  border: 1px solid ${colors.primary["blue"]};
  color: ${colors.primary["blue"]};
  font-size: 1.6rem;

  @media(max-width: 768px) {
    font-weight: 600;
  }
`