import styled from "styled-components";
import colors from "utils/colors.json";

export const TextAreaContainer = styled.textarea`
  width: 100%;
  resize: none;
  border: none;
  margin: 1.6rem 0;
  min-height: 8.2rem;
  max-height: 16.4rem;
  padding: 0.8rem 1.2rem;

  :focus {
    outline: 2px solid ${colors.primary["blue"]}
  }
`
