import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 113.6rem;
  margin: 0 auto;
  height: 11.5rem;

  .search-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60rem;

     .logo {
      width: 20rem;
      cursor: pointer;
    }
  }

  @media(min-width: 768px) and (max-width: 1136px) {
    padding: 0 3.2rem 0 3.4rem ;
    .search-container {
      width: 40.4rem;
    }

    .search-container  span {
      display: block;
      width: 2px;
    }
  }

  @media(max-width: 425px) {
    padding: 0 1.6rem;
  }
  @media(max-width: 767px) {
    .search-container {
      width: auto;
    }
  }
`