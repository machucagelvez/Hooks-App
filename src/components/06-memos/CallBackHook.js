import React, { useCallback, useEffect, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'
import './memos.css'

export const CallBackHook = () => {
  const [counter, setCounter] = useState(10)

  // const increment = () => {
  //   setCounter(counter + 1)
  // }

  //El primer argumento es lo que se va a memorizar; el segundo indica cuando se debe memorizar (cuando cambia ese argumento)
  const increment = useCallback(
    (num) => {
      //NO se puede usar directamente setCounter(counter + num) porque la función quedaría dependiendo de counter
      //y se debería entonces poner en el segundo argumento, anulando el efecto de useCallback porque se ejecutaría
      //<ShowIncrement /> cada vez que cambie counter.
      setCounter((c) => c + num)
    },
    [setCounter]
  )

  //También se usa en useEffect cuando depende una función que al cambiar haría que se ejecutara de nuevo al go que no se quiere:
  useEffect(() => {
    // Lo que se va a ejecutar
  }, [increment]) //Depende de la función memorizada

  return (
    <div>
      <h1>useCallBack Hook: {counter}</h1>
      <hr />

      {/* Lo que se está enviando es una versión memorizada de la función increment (un callback) */}
      <ShowIncrement increment={increment} />
    </div>
  )
}
