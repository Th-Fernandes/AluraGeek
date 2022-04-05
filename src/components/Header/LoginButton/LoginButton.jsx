import { StyledLogButton } from "./styles";
import { useRouter } from "next/router";

export default function LoginButton(props) {
  const router = useRouter()
  console.log(props.adminVer)
  return (
    <StyledLogButton
      onClick={() => router.push('./access/login')}
    >
      {props.adminVer ? 'Menu administrador' : 'Login'}
    </StyledLogButton>
  )
}