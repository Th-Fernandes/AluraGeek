import { BrandButton } from "components/utils/Buttons/BrandButton";
import { useRouter } from "next/router";
import { ModalContainer } from "../ModalContainer.js";
import { ModalContent } from "../ModalContent.js";


export function InfoModal({title, textContent}) {
  const router = useRouter();

  return (
    <ModalContainer>
      <ModalContent className="modal-content">
        <article>
          <h3>{title}</h3>

          <p>{textContent}</p>
        </article>

        <BrandButton onClick={() => router.push('/')} textContent="ok"/>
      </ModalContent>
    </ModalContainer>
  )
}