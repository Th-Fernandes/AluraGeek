import { useRouter } from "next/router";
import { InfoModalContainer } from "./styles";

export function InfoModal({title, textContent}) {
  const router = useRouter();

  return (
    <InfoModalContainer>
      <section className="modal-content">
        <article>
          <h3>{title}</h3>

          <p>{textContent}</p>
        </article>

        <button onClick={() => router.push('/')}>ok</button>
      </section>
    </InfoModalContainer>
  )
}