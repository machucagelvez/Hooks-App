import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import './styles.css'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
  // return [
  //   {
  //     id: new Date().getTime(),
  //     desc: 'Aprender React',
  //     done: false,
  //   },
  // ]
}

export const TodoApp = () => {
  //todos es el estado; todoReducer el que va a hacer modificaciones; initialState el estado inicial (en este caso es un []).
  //dispatch es el que dice que se va a enviar a todoReducer
  //Lo que retorna la función init es el inicial inicialState
  const [todos, dispatch] = useReducer(todoReducer, [], init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleDelete = (todoId) => {
    //La acción que debe ejecutar el reducer
    const action = {
      type: 'delete',
      payload: todoId,
    }

    dispatch(action)
  }

  const handleToggle = (todoId) => {
    dispatch({
      type: 'toggle',
      payload: todoId,
    })
  }

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: 'add',
      payload: newTodo,
    })
  }

  return (
    <div>
      <h1>TodoApp ({todos.length})</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>

        <div className="col-5">
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  )
}
