import { NextLink } from "components/utils/NextLink";
import { ModalContainer } from "../ModalContainer.js";
import { ModalContent } from "../ModalContent.js";
import Button from "components/utils/Buttons/DefaultButton";

export function WarningModal({ title, textContent }) {
  const buttons = [
    {
      textContent: 'cancelar',
      bgColor: 'grey',
      color: 'black'
    }, 
    {
      textContent: 'Deletar',
      bgColor: 'red',
      color: 'white'
    }
  ];



  return (
    <ModalContainer>
      <ModalContent className="modal-content">
        <article>
          <h3>{title}</h3>

          <p>{textContent}</p>
        </article>

        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          {
            buttons.map(({textContent, bgColor, color}) => (
              <NextLink href="">
                <Button style={{width: '15rem'}} bgColor={bgColor} color={color} >{textContent}</Button>
              </NextLink>
            ))
          }
        </div>
      </ModalContent>
    </ModalContainer>
  )
}