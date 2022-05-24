import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {
  const [user, setUser] = useState({})

  return (
    //El value es lo que va a ser compartido con los children por el UserContext.Provider
    <UserContext.Provider value={{ user, setUser }}>
      <AppRouter />
    </UserContext.Provider>
  )
}
