import styled from "styled-components";
import colors from "utils/colors.json";

export const InfoModalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    max-width: 60rem;
    height: 30rem;
    padding: 3.2rem;
    background-color: ${colors.neutrals['white']};
    border-radius: 1.6rem;

    & > article {
      & > h3 {
        font-size: clamp(2.2rem, 5vw, 3.5rem);
        margin-bottom: 1.2rem;
      }
  
      & > p {
        line-height: 2.5rem;
      }
    }

    & > button {
      width: min(30rem, 90%);
      height: 5rem;
      margin: 0 auto;
      background-color: ${colors.primary.blue};
      color: ${colors.neutrals.white};
      font-weight: bold;
    }
`