import { BrandButton } from "components/utils/Buttons/BrandButton/index.jsx"
import {BannerContainer} from "./styles.js"

export function Banner() {
  return (
    <BannerContainer>
      <article className="banner-content">
        <h1>Dezembro Promocional</h1>
        <p>Produtos selecionados com 33% de desconto</p>

        <BrandButton textContent="ver consoles"/>
      </article>
    </BannerContainer>
  )
}