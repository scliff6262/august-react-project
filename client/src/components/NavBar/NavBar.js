import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="products">Products</NavLink>
      <NavLink to="/contact">Contact Us</NavLink>
    </div>
  )
}

export default NavBar
