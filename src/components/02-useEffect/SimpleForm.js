import React, { useEffect, useState } from 'react'
import './effects.css'

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
  })
  const { name, email } = formState

  //Aplica a todo el SimpleForm:
  useEffect(() => {
    console.log('Hola')
  }, [])

  //Aplica cuando se modifique algo en formState:
  useEffect(() => {
    console.log('formState cambió')
  }, [formState])

  //Aplica cuando se modifique el email:
  useEffect(() => {
    console.log('email cambió')
  }, [email]) //se puede usar email directamente porque ya se había desestructurado

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value, //Lo que está en el input con atributo name se modifica al valor del atributo value
    })
  }

  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="email@email.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>
    </>
  )
}
