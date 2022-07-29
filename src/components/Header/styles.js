import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 113.6rem;
  height: 11.5rem;
  padding: 0 1.6rem;
  margin: 0 auto;

  @media(min-width: 768px) {
    padding: 0 3.2rem;
  }

  @media(min-width: 1440px) {
    padding: 0;
  }

  .search-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.2rem; 

     .logo {
      cursor: pointer;
      width: 10rem;
      height: 2.8rem;

      @media(min-width: 1024px){
        width: 17.6rem;
        height: 5rem;
      }
    }
  }
`