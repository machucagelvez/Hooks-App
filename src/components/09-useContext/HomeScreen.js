import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {
  const { user } = useContext(UserContext) //Recuperando la informción que está en el Context
  console.log(user)

  return (
    <div>
      <h1>HomeScreen</h1>
      <hr />

      <pre>{JSON.stringify(user, null, 3)}</pre>
    </div>
  )
}
