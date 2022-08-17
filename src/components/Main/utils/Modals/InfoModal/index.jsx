import { BrandButton } from "components/utils/Buttons/BrandButton";
import { useRouter } from "next/router";
import { ModalContainer } from "../ModalContainer";
import { InfoModalContainer } from "./styles";

export function InfoModal({title, textContent}) {
  const router = useRouter();

  return (
    <ModalContainer>
      <InfoModalContainer className="modal-content">
        <article>
          <h3>{title}</h3>

          <p>{textContent}</p>
        </article>

        <BrandButton onClick={() => router.push('/')} textContent="ok"/>
      </InfoModalContainer>
    </ModalContainer>
  )
}