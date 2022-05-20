import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado'
import { useCounter } from '../../hooks/useCounter'
import './memos.css'

export const MemoHook = () => {
  const { counter, increment } = useCounter(1000)
  const [show, setShow] = useState(true)

  //El primer argumento es la función que se va a memorizar; el segundo indica cuando se debe memorizar (cuando cambia ese argumento)
  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

  return (
    <div>
      <h1>MemoHook</h1>
      <h3>
        Counter: <small>{counter}</small>
      </h3>
      <hr />

      <p>{memoProcesoPesado}</p>
      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>

      {/* El clic en este botón no renderiza el componente gracias a memoProcesoPesado: */}
      <button
        className="btn btn-outline-primary ml-3"
        onClick={() => {
          setShow(!show)
        }}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  )
}
