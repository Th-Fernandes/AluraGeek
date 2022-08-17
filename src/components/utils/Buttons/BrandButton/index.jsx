import {  BrandButtonLoading } from "./styles";
import BrandButtonDefault from "components/utils/Buttons/DefaultButton";
import loadingIcon from "/public/images/general/loading-icon.svg";

export function BrandButton({ textContent, isLoading, onClick }) {
  return (
    <>
      {
        isLoading
          ? (
            <BrandButtonLoading  disabled={true}>
              <img src={loadingIcon.src} alt="carregando..." />
            </BrandButtonLoading>
          )

          : (
            <BrandButtonDefault bgColor="blue" color="white" onClick={onClick}>
              {textContent}
            </BrandButtonDefault>
          )
      }
    </>
  )
}