import styled from "styled-components";
import banner from "../../../../public/images/general/banner.svg";
import colors from "utils/colors.json";

export const StyledBanner = styled.section`
  min-height: 35.2rem;
  background: url(${banner.src})  center no-repeat;
  background-size: cover;
  display: flex;
  align-items: end;
  flex-wrap: wrap;
  padding-bottom: 3.2rem;

  > .banner-content {
    width: 113.6rem;
    margin: 0 auto;
    color: ${colors.neutrals["white"]};

    & > h1 {
      font-size: 5.2rem;
      animation: 2.25s fade;
    }

    & > p {
      font-size: 2.2rem;
      margin: 1.6rem 0;
      animation: 2.5s fade;
    }

    & > button {
      width: 13rem;
      height: 5.1rem;
      background-color: ${colors.primary["blue"]};
      color: ${colors.neutrals["white"]};
      font-size: 1.6rem;
    } 
  }

  @media(max-width: 1136px) {
    & >.banner-content {
      margin: 0 3.2rem;
    }
  }



  @media(max-width: 425px) {
    > .banner-content {
      padding-left: 1.6rem;

      & > h1 {
        font-size: 2.2rem;
      }
  
      & > p {
        font-size: 1.4rem;
      }
    }
  }

  @keyframes fade {
    from {
      opacity: 0;
      color: transparent;
    }

    to {
      opacity: 1;
      color: #fff
    }
  }
`