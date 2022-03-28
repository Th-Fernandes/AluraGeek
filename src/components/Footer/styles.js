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


  @media (max-width: 800px) {
    
    .footer-container {
      padding: 3.2rem 3.2rem;
      & .channels {
        
        & nav {
          display: block;
        }
      }
    }
  }

  @media(max-width: 425px) {
    .footer-container {
      padding: 3.2rem 0.8rem;
      & .channels {
        flex-wrap: wrap;
        & nav {
          text-align: center;
        }
      }
    }
  }
`