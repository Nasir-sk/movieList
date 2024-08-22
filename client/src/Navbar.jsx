import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <nav className='navbar'>
        <NavLink className={(e)=>{return e.isActive?"red": ""}} to="/company-info"><li>Company Info</li></NavLink>
        </nav>
    </div>
  )
}

export default Navbar