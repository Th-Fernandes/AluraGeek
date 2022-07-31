import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 11.5rem;

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