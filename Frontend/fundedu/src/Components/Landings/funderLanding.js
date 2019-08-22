import React from 'react';
import "./css/funderLanding.css"
import AOS from 'aos';
import 'aos/dist/aos.css'
import Nav from "../Nav/Nav"

const funderLanding = (props) => {

    AOS.init({
        duration: 3000,
        mirror: true,
    })

    return (
        <div id="funderLandingPageContainer">
            <div className="landingNav">
                <Nav />
            </div>
            <div id="parentContainer" >
                <div id="funderQuote" data-aos="fade-up">
                    <h5 >"Remember that the happiest people are not those <m>getting</m> more, but those <m>giving</m> more."</h5>
                </div>
                <div id="registerContainer" data-aos="fade-up">
                    <button id="funderRegisterButton" onClick={() => props.history.push("/funder/register")}>Register</button>
                </div>
                <div id="loginContainer" data-aos="fade-up">
                    <button id="funderLoginButton" onClick={() => props.history.push("/funder/login")}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default funderLanding;