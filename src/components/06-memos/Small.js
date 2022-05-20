import React from 'react'

//React.memo memoriza el componente y evita que se ejecute si no cambian las props (se ejecuta la versión memorizada)
//También se puede importar de 'react' y usar como memo()
export const Small = React.memo(({ value }) => {
  console.log('Me volví a llamar')
  return <small>{value}</small>
})
