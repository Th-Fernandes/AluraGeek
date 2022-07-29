import styled from "styled-components";
import colors from "utils/colors.json";

export const FormSearchBar = styled.form`
  display: none;
  visibility: hidden;
  opacity: 0;
  
  @media(min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    visibility: visible;
    opacity: 1;
    width: 27.2rem;
    height: 4rem;
    padding: 0 1.6rem;
    background-color: ${colors.neutrals["white-200"]};
    border-radius: 3.2rem;

    &:focus-within {
      outline: 2px solid ${colors.primary["blue"]};
    }

    > #barraPesquisa {
      flex-grow: 1;
    }
  }

  @media(min-width: 1024px) {
    width: 39.3rem;
  }

`