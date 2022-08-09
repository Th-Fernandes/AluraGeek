import {TextAreaContainer} from "./style";

export function TextAreaContent({placeholder,name, onChange}) {
  return (
    <TextAreaContainer 
      onChange={onChange}
      placeholder={placeholder} 
      name={name}
    />
  )
}