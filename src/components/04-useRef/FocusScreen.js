import React, { useRef } from 'react'
import './focusScreen.css'

export const FocusScreen = () => {
  const inputRef = useRef()

  const handleClick = () => {
    //document.querySelector('input').select() //Al usar focus() solo pondría el foco en el input
    inputRef.current.select() //Hace lo mismo que el anterior. inputRef es la referencia al input
    console.log(inputRef)
  }

  return (
    <div>
      <h1>FocusScreen</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Su nombre"
        ref={inputRef}
      />

      <button className="btn btn-outline-primary mt-3" onClick={handleClick}>
        Focus
      </button>
    </div>
  )
}
