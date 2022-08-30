import styled from "styled-components";
import colors from "utils/colors.json";

export const DropContainer = styled.div`

@media(min-width:768px) {
  display: flex;
  align-items: center;
}

& > .drop-product-content {
  max-height: 13.4rem;

  & > input {
    position: relative;
    top: -13.4rem;
    height: 13.4rem;
    opacity: 0;
    cursor: pointer;
  }

  & > label {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    min-height: 13.4rem;
    text-align: center;
    background-color: ${colors.neutrals["white"]};
    border: 2px dashed ${colors.neutrals["black-200"]};

    & > p {
      margin-top: 2.2rem;
      width: 100%;
    }
  }
}

& > .fileOption {
  display: none;
  opacity: 0;
  visibility: hidden;

  @media (min-width: 768px) {
    display: flex;
    align-items :center;
    opacity: 1;
    visibility: visible;
  }

  & > span {
      margin-inline: 0.8rem; 
  }

  & .fileSearchButton {
    width: 21rem;
    height: 5.1rem;
    border: 1px solid ${colors.primary["blue"]};
    color: ${colors.primary["blue"]};
  }
}

`