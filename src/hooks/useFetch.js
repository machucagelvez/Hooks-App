import { useEffect, useRef, useState } from 'react'

export const useFetch = (url) => {
  const isMounted = useRef(true)
  const [state, setState] = useState({ data: null, loading: true, error: null })

  useEffect(() => {
    return () => {
      isMounted.current = false //Cuando se desmonta se pone la referencia en false
    }
  }, [])

  useEffect(() => {
    // Cuando cambia la URL vuelve al estado inicial:
    setState({ data: null, loading: true, error: null })

    // Consume el API:
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        //Evita que se renderice algo que ya se desmontó (en React 18 ya no se requiere hacer esto):
        if (isMounted.current) {
          setState({
            data,
            loading: false,
            error: null,
          })
        }
      })
  }, [url])

  return state
}
