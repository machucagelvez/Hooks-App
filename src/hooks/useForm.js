import { useState } from 'react'

//Se pueden recibir más argumentos para realizar validaciones en el form, por ejemplo.
export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState)
  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    })
  }

  return [values, handleInputChange]
}
