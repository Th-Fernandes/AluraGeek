import { StyledFooter } from "./styles";
import logo from "../../../public/images/general/logo.svg";
import Image from "next/image";
import UserContactData from "./UserContactData/UserContactData";
import footerNavLinks from "./footerContents.json"

export default function Footer() {
  return (
    <StyledFooter>
      <div className="channels">
        <nav className="footer-nav">
          <Image
            src={logo}
            width="176" height="50"
          />
          <ul className="footer-links">
            {
              footerNavLinks.map((element, index) => (
                <li className="footer-link" key={index}>
                  <a src="#">{element}</a>
                </li>
              ))
            }
          </ul>
        </nav>
        <UserContactData />
      </div>

      <div className="programmer-info">
        desenvolvido por Thiago Fernandes
        <span>2022</span>
      </div>
    </StyledFooter>
  )
}