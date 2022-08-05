import styled from "styled-components";
import colors from "utils/colors.json";


export const BrandButtonDefault = styled.button`
  width: 100%;
  background-color: ${colors.primary["blue"]};
  color: ${colors.neutrals["white"]};
  height: 6.2rem;
  font-size: 1.4rem;
  font-weight: 600;
  transition: background 0.25s;

  &:hover {
    background: ${colors.primary['blue-hover']};
  }

  &:focus {
    outline: 3px solid #000;
  }

  @media(min-width: 1024px) {
    font-size: 1.8rem;
  }
`

export const BrandButtonLoading = styled(BrandButtonDefault)`
cursor: not-allowed;
background-color: ${colors.neutrals['black-200']};

  > img {
    animation: 1s loadSpin linear infinite;
    
  }  

@keyframes loadSpin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

`