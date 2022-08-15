import { BrandButtonDefault, BrandButtonLoading } from "./styles";
import loadingIcon from "../../../../public/images/general/loading-icon.svg";

export function BrandButton({ textContent, isLoading, onClick }) {
  return (
    <>
      {
        isLoading
          ? (
            <BrandButtonLoading disabled={true}>
              <img src={loadingIcon.src} alt="" />
            </BrandButtonLoading>
          )

          : (
            <BrandButtonDefault onClick={onClick}>
              {textContent}
            </BrandButtonDefault>
          )
      }
    </>
  )
}