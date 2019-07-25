import React from 'react'
import { NavLink } from 'react-router-dom'



const Nav = () => {
    return (
        <nav className="">
            <NavLink to='/' 
                    className="">
                <h1>FundedU</h1>
            </NavLink>
        </nav>
    )
}

export default Nav;