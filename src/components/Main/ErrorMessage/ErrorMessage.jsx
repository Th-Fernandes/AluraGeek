import errorIcon from "../../../../public/images/general/error-icon.svg"
import { ErrorContainer } from "./styles"

export default function ErrorMessage({errorCode}) {
  return (
    <ErrorContainer >
      <img src={errorIcon.src} alt="ícone de erro: uma '!' em vermelho envolvido por um círuclo também em vermelho." />
      <h2>ops! algo de errado aconteceu!</h2>
      <p>
        Parece que um erro inexperado ocorreu durante o 
        carregmanto do conteúdo. Tente novamente em 
        instantes.
      </p>
      <span>código do erro: {errorCode}</span>
    </ErrorContainer >
  )
}