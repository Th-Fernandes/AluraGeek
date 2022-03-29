import { StyledInput, StyledLabel } from "./style"

export default function InputContent(props) {
  const verifyProps = (prop) => {
    if (!prop) throw new Error(`
      Props Necessárias faltando, verifique se seu componente contém as seguintes props:
        * inputId
        * inputType
        * label
    `)

    return prop
  }

  return (
    <>
      <StyledLabel htmlFor={verifyProps(props.inputId)}>
        {verifyProps(props.label)}
      </StyledLabel>

      <StyledInput
        type={verifyProps(props.inputType)} 
        id={verifyProps(props.inputId)}
        placeholder={props.placeholder} 
      />
    </>
  )
}