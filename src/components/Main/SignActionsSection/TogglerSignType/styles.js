import styled from "styled-components";
import colors from "utils/colors.json";

export const TogglerSignTypeContent = styled.small`
  display: block;
  margin-top: 2rem;
  font-size: 1.25rem;
  text-align: center;
    
  & > span {
    color: ${colors.primary['blue']};
    text-decoration: underline;
    cursor: pointer;
  }
`