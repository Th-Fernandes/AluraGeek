import { StyledProductDesc } from "./styles";
import React from "react";

export default function ProductDescription () {
  const [data, setData] = React.useState(undefined)

  React.useEffect(() => {
    receaveData()

  }, [])

  const receaveData = () => {
    fetch('http://localhost:5000/products')
      .then(async response => {
        const dataProduct = await response.json()
        setData(dataProduct)
        console.log(dataProduct[0].starwars[0].name)
      }) 
  }

  return (
    <StyledProductDesc>
      <div className="product-thumb"></div>

       <article>
        {data && <h1>{data[0].starwars[0].name}</h1>}
        {data && <span className="preco">{data[0].starwars[0].price}</span>}

        {data && <p>{data[0].starwars[0].description}</p>}
      </article> 
    </StyledProductDesc>
  )
}