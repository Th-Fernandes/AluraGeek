import styled from 'styled-components'
import colors from "utils/colors.json"

export const ErrorContainer = styled.div`
  min-height: 30rem;
  text-align: center;
  padding: 5rem 0;

  & > img {
    width: 15rem;
    animation: blink 2s infinite ;
  }

  & > h2 {
    font-size: 4rem;
  }

  & > p {
    margin: 1.2rem auto 0 ;
    width: min(90%, 60rem);
    font-size: 2rem;
  }

  & > span {
    font-size: 1.8rem;
    color: ${colors.neutrals["black-300"]}
  }

  @keyframes blink {
    0% {
      filter: drop-shadow(0 0 0 red);
      
    }

    50% {
      filter: drop-shadow( 0 0 5px ${colors.primary['red']});
    }

    to {
      filter: drop-shadow(0 0 0 red);
    }
  }
`