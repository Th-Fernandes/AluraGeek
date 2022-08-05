import styled from "styled-components";
import bannerMobile from "../../../../public/images/general/banner-mobile.svg";
import banner from "../../../../public/images/general/banner.svg";
import colors from "utils/colors.json";

export const BannerContainer = styled.section`
  display: flex; 
  align-items: end;
  max-width: 100%;
  height: 30.2rem;
  padding-bottom: 1.6rem;
  background: url(${bannerMobile.src}) center no-repeat;
  background-size: cover;

  @media(min-width: 768px) {
    background-image: url(${banner.src})
    height: 35.2rem;
    padding-bottom: 3.2rem;
  }

  @media(min-width: 1440px) {
    height: 46.7rem;
  }

  > .banner-content {
    width: 113.6rem;
    margin: 0 auto;
    color: ${colors.neutrals["white"]};

    & > h1 {
      font-size: clamp(2.2rem, 6.35vw, 5.2rem);
      animation: 2.25s fade;
    }

    & > p {
      font-size: clamp(1.4rem, 3vw, 2.2rem);
      margin: 1.6rem 0;
      animation: 2.5s fade;
    }

    & > button {
      max-width: 12rem;
      height: 5.1rem;
      padding: 0 1.6rem;
      font-size: 1.4rem;
      font-weight: 400;
    } 
  }

  @keyframes fade {
    from {
      opacity: 0;
      color: transparent;
    }

    to {
      opacity: 1;
      color: #fff;
    }
  }
`