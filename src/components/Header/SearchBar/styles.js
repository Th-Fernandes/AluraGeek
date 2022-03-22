import styled from "styled-components";
import colors from "utils/colors.json";

export const StyledSearchBar = styled.form`
  width: 39.3rem;
  height: 4rem;
  background-color: ${colors.neutrals["white-200"]};
  border-radius: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.85rem 0 1.6rem;
  outline: ${props => {
    if(props.isClicked) {
      return`2px solid ${colors.primary["blue"]}`
    }
  }};

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