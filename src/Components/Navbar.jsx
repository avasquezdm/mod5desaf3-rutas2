import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  
    const setActive = ({isActive}) => (isActive ? "navlink active" : "navlink")
  
    return (
    <div className="navbar">
        <div><img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg" alt="Pokebola" className='navbar-img'/></div>
        <div>
        <NavLink className={setActive} to="/">Home</NavLink>
        <NavLink className={setActive} to="/pokemones">Pokemones</NavLink>
        </div>
    </div>
  )
}

export default Navbar