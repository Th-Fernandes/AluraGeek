import  styled  from "styled-components"
import colors from "utils/colors.json"

export const StyledError = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 70rem;
  background-color: #E5E5E5;

  & > .error-content {
    & > h1 {
      font-size: 4.5rem;
    }

    & > p {
      font-size: 2.3rem;
      margin-bottom: 2rem;
    }

    & > button {
      padding: 0 1.2rem;
      background-color: ${colors.primary["blue"]};
      color: ${colors.neutrals["white"]};
      height: 6.2rem;
      font-size: 1.8rem;
      font-weight: 600;
    }
  }
`