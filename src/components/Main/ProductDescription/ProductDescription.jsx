import { StyledProductDesc } from "./styles";

import products from "data/products.json"

export default function ProductDescription () {
  return (
    <StyledProductDesc>
      <div className="product-thumb"></div>

      <article>
        <h1>{products.starWars[0].name}</h1>
        <span className="preco">{products.starWars[0].price}</span>

        <p>{products.starWars[0].description}</p>
      </article>
    </StyledProductDesc>
  )
}