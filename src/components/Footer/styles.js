import styled from "styled-components";
import colors from "utils/colors.json";

export const StyledFooter = styled.footer`
  background-color: ${colors.primary["blue-light"]};
  height: 36.8rem;
  padding: 6.4rem 0;
  
  .footer-container {
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
        list-style: none;

        & .footer-link {
          font-size: 1.6rem;

          &:not(last-child) {
            margin-bottom: 2.4rem;
          }
        }
      }
    }
  }
`