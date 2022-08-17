import styled from "styled-components";
import colors from "utils/colors.json";

export const ModalContent = styled.div`
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
`