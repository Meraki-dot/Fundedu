import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {

    return (
        <div >
            <h4 data-aos="fade-down">
                <NavLink id="Nav" to="/">
                   <h5>Back To <m>Home</m></h5>
                </NavLink>
            </h4>
        </div>
    )
}

export default Nav;