import styled from "styled-components"

export const ModalContainer = styled.section`
  display: flex;  
  justify-content: center;
  align-items: end;
  max-width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 999;
  inset: 0;
  padding: 0;
  background-color: rgba(0, 0,0 , 0.5);

  @media(min-width:768px) {
    align-items: center;
  }
`