import styled from "styled-components";
import colors from "utils/colors.json";

export const StyledFooter = styled.footer`
  padding-inline: 0; 
  background-color: ${colors.primary["blue-light"]};

  & .channels {
    max-width: 113.6rem;
    margin: auto;
    padding: 1.6rem 0 3.2rem;

    @media(min-width: 768px) {
      display: flex;
      justify-content: space-between; 
      padding: 3.2rem;
    }

    @media(min-width: 1024px) {
      padding: 6.4rem 0;
    }

    & .footer-nav {
      text-align: center;
      font-weight: bold;

      @media(min-width: 768px) {
        text-align: left;
      }

      @media(min-width: 1024px){
        display: flex;
        align-items: flex-start;
        gap: 11.2rem;
      }

      & .footer-links {
        & .footer-link {
          margin-bottom: 1.6rem;

          @media(min-width: 768px) {
            margin-bottom: 2.4rem;
          }
        }
      }
    }
  }

  & .programmer-info {
    display: flex;
    justify-content: center;  
    align-items: center;
    flex-direction: column;
    height: 10.2rem;
    margin-top: 1.6rem;
    background-color: ${colors.neutrals.white};
  }
`