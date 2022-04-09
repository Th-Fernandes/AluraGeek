import styled from "styled-components";
import pallet from "utils/colors.json";

export const StyledHeader = styled.article`
  margin-left: 345px;

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
`