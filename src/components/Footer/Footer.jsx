import { StyledFooter } from "./styles";
import logo from "img/logo.svg";
import Image from "next/image"
import UserContactData from "./UserContactData/UserContactData";

export default function Footer() {
  const navLinks = [
    'Quem somos nós', 'Política de privacidade', 
    'Programa fidelidade', 'Nossas lojas', 
    'Quero ser franqueado', 'Anuncie aqui'
  ]

  return(
    <StyledFooter>
      <div className="footer-container">
        <nav>
          <Image 
            src={logo.src} 
            width="176" height="50"
          />

          <ul className="footer-links">
            {
              navLinks.map((element, index) => {
                return (
                  <li className="footer-link" key={index}>
                    <a src="#">{element}</a>
                  </li>
                )
              })
            }
          </ul>
        </nav>

        <UserContactData />
      </div>
    </StyledFooter>
  )
}