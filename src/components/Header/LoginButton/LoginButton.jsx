import { StyledLogButton } from "./styles";
import { useRouter } from "next/router";

export default function LoginButton() {
  const router = useRouter()

  return (
    <StyledLogButton
      onClick={() => router.push('./login')}
    >
      Login
    </StyledLogButton>
  )
}