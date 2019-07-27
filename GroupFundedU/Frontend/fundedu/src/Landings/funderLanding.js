import React from 'react';

const funderLanding = (props) => {

    return (
        <div>
            <img src="https://www.nerdwallet.com/cdn/homepage/images/nw-hp-find-your-best-cc.svg" alt="" />
            <h5>Register or login as a Funder</h5>

            <button className="btn btn-primary" onClick={() => props.history.push("/funder/register")}>Register</button>
            <button className="btn btn-secondary" onClick={() => props.history.push("/funder/login")}>Login</button>
        </div>
    );
}

export default funderLanding;