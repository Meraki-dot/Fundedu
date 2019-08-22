import React from 'react';
import "./css/studentLanding.css"
import AOS from 'aos';
import 'aos/dist/aos.css'
import Nav from "../Nav/Nav"

const studentLanding = (props) => {

    AOS.init({
        duration: 3000,
        mirror: true,
    })

    return (
        <div id="studentLandingPageContainer">
            <div className="landingNav">
                <Nav />
            </div>
            <div id="parentContainer" >
                <div id="studentQuote" data-aos="fade-up">
                    <h5 >"Don't let what you&nbsp;<m>cannot</m>&nbsp;do interfere with what you&nbsp;<m>can</m>&nbsp;do."
                    </h5>
                </div>
                <div id="registerContainer" data-aos="fade-up">
                    <button id="studentRegisterButton" onClick={() => props.history.push("/student/register")}>Register</button>
                </div>
                <div id="loginContainer" data-aos="fade-up">
                    <button id="studentLoginButton" onClick={() => props.history.push("/student/login")}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default studentLanding;