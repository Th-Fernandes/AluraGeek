import {TogglerSignTypeContent} from "./styles"

export function TogglerSignType({signType, setSignType}) {
  const signConfig = {
    signIn: {
      textContent: ['Não possui uma conta?', 'crie agora!'],
      handleToggleSignType: () => setSignType('signUp')
    },
    signUp: {
      textContent: ['Já possui uma conta?', 'faça login aqui.'],
      handleToggleSignType: () => setSignType('signIn')
    }
  };

  const { textContent, handleToggleSignType} = signConfig[signType];

  return (
    <TogglerSignTypeContent>
      {textContent[0]}
        <span onClick={handleToggleSignType}>
          {textContent[1]}
        </span>
    </TogglerSignTypeContent>
  )
}