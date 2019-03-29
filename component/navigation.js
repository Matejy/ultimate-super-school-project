import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink to="/" className="text-secondary nav-link">Domov</NavLink><span className="sr-only">(current)</span>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/donate" className="text-secondary nav-link">Daruj</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className="text-secondary nav-link">O projekte</NavLink>
                    </li>
                    {/* <li className="nav-item">
                        <NavLink to="/login" className="text-secondary nav-link">Login</NavLink>
                    </li> */}
                </ul>
            </div>
        </nav>
    )
}
export default Navigation