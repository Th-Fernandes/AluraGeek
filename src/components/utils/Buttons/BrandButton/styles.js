import DefaultButton from "components/utils/Buttons/DefaultButton";
import styled from "styled-components";
import colors from "utils/colors.json";

export const BrandButtonLoading = styled(DefaultButton)`
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