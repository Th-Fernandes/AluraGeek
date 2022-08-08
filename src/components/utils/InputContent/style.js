import styled from "styled-components";
import colors from "utils/colors.json";

export const InputContainer = styled.div`
  border-bottom: 1px solid #C8C8C8;
  padding: 0.8rem 1.2rem;
  background-color: ${colors.neutrals["white"]};

  :focus-within {
    outline: 2px solid ${colors.primary["blue"]};
  }
`

export const StyledLabel = styled.label`
  display: block;
  color: ${colors.neutrals["black-200"]};
  font-size: 1.2rem;
  cursor: pointer;
`

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  margin-top: 0.4rem;
  font-size: 1.6rem;
`