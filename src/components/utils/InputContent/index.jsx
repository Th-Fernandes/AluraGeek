import { InputContainer, StyledInput, StyledLabel } from "./style";

export default function InputContent({inputId, label, inputType, placeholder, onChange}) {
  function verifyProps() {
    const props = [inputId, label, inputType];

    props.forEach(prop => {
      if (!prop) throw new Error(`
      props necessárias estão faltando, certifique se o componente possue as seguites props:
      - inputId
      - label
      - inputType
     `) 
    })
  }

  return (
    <InputContainer>
      {verifyProps()}
      <StyledLabel htmlFor={inputId}>
        {label}
      </StyledLabel>

      <StyledInput
        onChange={onChange}
        type={inputType} 
        id={inputId}
        placeholder={placeholder} 
      />
    </InputContainer>
  )
}