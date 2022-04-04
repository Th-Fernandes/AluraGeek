import { StyledProductDesc } from "./styles";
import React from "react";

export default function ProductDescription (props) {
  const [data, setData] = React.useState(undefined)
  //const [product, setProduct] = React.useState()

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

  console.log( props.productData.name )

  
  return (
    <StyledProductDesc
      productThumb={props.productData.thumb}
    >
      <div className="product-thumb"></div>

       <article>
         <h1>{props.productData.name}</h1>
        <span className="preco">{props.productData.price}</span>

        <p>{props.productData.description}</p>
      </article> 
    </StyledProductDesc>
  )
}