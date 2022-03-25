import styled from "styled-components";
import colors from "utils/colors.json";

export const StyledFooter = styled.footer`
  
  height: 36.8rem;
  
  
  .footer-container {
    padding: 6.4rem 0;
    background-color: ${colors.primary["blue-light"]};
    & .channels {
      max-width: 113.6rem;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;

    & nav  {
      display: flex;
      align-items: start;
      justify-content: space-between;
      width: 41.8rem;

      & .footer-links {
        & .footer-link {
          font-size: 1.6rem;

          &:not(last-child) {
            margin-bottom: 2.4rem;
          }
        }
      }
    }
    }
  }

  .programer-info {
    height: 10.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    align-content: center;
    font-size: 1.6rem;
    font-weight: 500;

    & > span {
      width: 100%;
      text-align: center;
    }
  }

  @media(max-width: 768px){
    padding: 3.2rem;

    .footer-container {
      &  > nav {
        flex-wrap: wrap;
      }
    }
  }

  @media(max-width: 425px) {
    min-height: 55.3rem;
    padding: 1.6rem;

    .footer-container {
      flex-wrap: wrap;
      

      & > nav {
        justify-content: center;

        & > .footer-links {
          margin-top: 1.6rem;
          text-align: center;
          width: 100%;

          & .footer-link { 
            &:not(last-child) {
              margin-bottom: 1.6rem;
            }
          }
        }
      }
    }
  }
`