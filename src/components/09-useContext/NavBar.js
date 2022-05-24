import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">
        useContext
      </NavLink>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          {/* Ya no se necesita el activeClassName parq ue se active la ruta seleccionada: */}
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
