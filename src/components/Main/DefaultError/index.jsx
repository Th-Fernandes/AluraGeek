import { StyledError } from "./styles";
import { useRouter } from "next/router";


export default function DefaultError(props) {
  const router = useRouter()
  const {title, description, button} = props

  return (
    <StyledError>
      <div className="error-content">
        <h1>{title}</h1>
        <p>{description}</p>

        <button
          onClick={() => router.push(button.router) }
        >
          {button.textContent}
        </button>
      </div>
    </StyledError>
  )
}