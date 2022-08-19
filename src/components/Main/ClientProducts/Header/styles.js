import styled from "styled-components";
import pallet from "utils/colors.json";

export const StyledHeader = styled.article`
  padding: 3.2rem;

  @media (min-width: 1024px) {
    padding-inline: 0;
    padding-block: 6.4rem 0;
  }

  & > h1 {
    font-size: 2.2rem;
  }

  & > button {
    background-color: ${pallet.primary['blue']};
    font-size: 1.4rem;
    color: ${pallet.neutrals['white']};
    height: 4rem;
    padding: 0 1.6rem;
    margin-top: 1.6rem;
  }

  @media(min-width: 768px){
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 113.6rem;
    margin: 0 auto;

    & > button {
      margin: 0;
    }  
  }

  
`