import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './multipleCustomHooks.css'

export const MultipleCustomHooks = () => {
  // Usa el contador (custom hook) para incrementar el id que se envía al API:
  const { counter, increment } = useCounter(1)

  // Usa useFetch (custom hook) para consumir el API:
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  )
  // Si no hay data no se crean las const:
  const { author, quote } = !!data && data[0] //Si !!data es true entonces const = data[0]

  return (
    <div>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {
        // Muestra el loading o la info:
        loading ? (
          <div className="alert alert-info text-center">Loading...</div>
        ) : (
          <blockquote className="blockquote text-right">
            <p className="mb-0">{quote}</p>
            <footer className="blockquote-footer">{author}</footer>
          </blockquote>
        )
      }

      <button onClick={increment} className="btn btn-primary">
        Siguiente quote
      </button>
    </div>
  )
}
