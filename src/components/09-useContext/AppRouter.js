import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AboutScreen } from './AboutScreen'
import { HomeScreen } from './HomeScreen'
import { LoginScreen } from './LoginScreen'
import { NavBar } from './NavBar'

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="container">
          <Routes>
            {/* Desde react-router-dom v6 cambió Switch por Routes, ya no es requiere el exact */}
            <Route path="/" element={<HomeScreen />} />
            <Route path="/about" element={<AboutScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            {/* Ruta por defecto (ambas funcionan): */}
            <Route path="*" element={<HomeScreen />} />
            {/* Redirect yo no existe en 'react-router-dom': */}
            {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  )
}
