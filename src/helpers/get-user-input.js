export function getUserInput(event, changeStateValue) {
  const {value, name} = event.target;

  changeStateValue(actualState => ({
      ...actualState,
      [name]: value,
    })
  )
}