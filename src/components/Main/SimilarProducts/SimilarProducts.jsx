import { StyledSimilar } from "./styles";
import product from "img/star-wars-product.svg";
import products from "data/products.json";

export default function SimilarProducts() {

  return (
    <StyledSimilar>
      <h2>Produtos similares</h2>

      <ul className="similar-products">
        {
          [1, 2, 3, 4].map(element => {
            return (
              <li className="similar-product" key={element}>
                <img src={products.starWars[element].thumb} alt={products.starWars[element].alt} />
                {console.log(products.starWars[element].thumb)}
                <article>
                  <h3>{products.starWars[element].name}</h3>
                  <p>{products.starWars[element].price}</p>

                  <a href="#">Ver produto</a>
                </article>
              </li>
            )
          })
        }
      </ul>
    </StyledSimilar>
  )
}