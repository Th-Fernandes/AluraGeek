import { InputContainer, StyledInput, StyledLabel } from "./style";

export function InputContent({inputId, label, name, required, inputType, placeholder, onChange, }) {
  function verifyProps() {
    const props = [inputId, label, inputType, name];

    props.forEach(prop => {
      if (!prop) throw new Error(`
      props necessárias estão faltando, certifique se o componente possue as seguites props:
      - inputId
      - label
      - inputType
      - name
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
        name={name}
        required={required}
      />
    </InputContainer>
  )
}