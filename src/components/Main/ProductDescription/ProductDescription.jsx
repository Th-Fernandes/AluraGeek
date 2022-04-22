import { StyledProductDesc } from "./styles";
import React from "react";

export default function ProductDescription (props) {
  const [data, setData] = React.useState(undefined)
  
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