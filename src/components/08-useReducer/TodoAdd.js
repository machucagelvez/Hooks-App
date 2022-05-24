import React from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: '', //debe ser el mismo nombre que aparece en el name del input (name="description")
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    //Evita crear una tarea sin descripción
    if (description.trim().length <= 1) {
      return
    }

    //Nuevo todo (nueva estado a enviar al reducer)
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    }

    //Se envía la tarea (la acción que se va a agregar) al reducer
    handleAddTodo(newTodo)
    reset()
  }

  return (
    <>
      <h4>Agregar TODO</h4>
      <hr />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          placeholder="Ingresar tarea"
          autoComplete="off"
          className="form-control"
          value={description}
          onChange={handleInputChange}
        />

        <button
          type="submit"
          className="btn btn-outline-primary btn-block mt-1"
        >
          Agregar
        </button>
      </form>
    </>
  )
}
