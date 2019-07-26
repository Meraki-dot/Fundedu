import React from 'react'
import { NavLink } from 'react-router-dom'



const Nav = () => {
    return (
        <nav className="row navigation-area">
            <NavLink to='/' 
                    className="nav-text">
                <h1>FundedU</h1>
            </NavLink>
        </nav>
    )
}

export default Nav;