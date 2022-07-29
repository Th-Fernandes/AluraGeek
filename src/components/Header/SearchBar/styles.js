import styled from "styled-components";
import colors from "utils/colors.json";

export const FormSearchBar = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 39.3rem;
  height: 4rem;
  background-color: ${colors.neutrals["white-200"]};
  border-radius: 3.2rem;

  &:focus-within {
    outline: 2px solid ${colors.primary["blue"]}
  }

  > input {
    width: 100%;
  }

  @media (max-width: 1024px) {
    width: 27.2rem;  
  }

  @media(max-width: 425px) {
    display: none;
    visibility: hidden;
    opacity: 0;
  }

`