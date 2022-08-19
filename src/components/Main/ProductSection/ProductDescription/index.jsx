import { useRouter } from "next/router";
import { NextLink } from "components/utils/NextLink";
import { ProductActions } from "./ProductActions";
import { ProductDescriptionContainer } from "./styles";

export function ProductDescription({name, price, thumb, alt, isEditable}) {
  const router = useRouter();

  return (
    <ProductDescriptionContainer isEditable={isEditable}>
      <div className="product-img-container">
        {isEditable && <ProductActions />}
        <img
          onClick={() => router.push(`/product?name=${name}`)}
          className='product-img'
          src={thumb}
          alt={alt}
        />
      </div>

      <span className="product-description">
        <p className="product-name">{name}</p>
        <p className="product-price">{price}</p>
        <NextLink href={`/product?name=${name}`}>ver tudo</NextLink>
      </span>
    </ProductDescriptionContainer>
  )
}