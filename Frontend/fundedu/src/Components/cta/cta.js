import React from 'react'
import './cta.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

const callToAction = (props) => {

    AOS.init({
        duration: 3000,
        mirror: true,
    })

    return (
        <div id="frontPageContainer">
            <div id="parentContainer">
                <div>
                    <div className="flexContainer" data-aos="fade-up">
                        <div id="border">
                            <img id="logo" src={require("./images/fundedU_logo.png")} />
                        </div>
                        <h2 data-aos="fade-up" id="ctaQuote">"<m >Outstanding</m> people have one thing in common: an absolute sense of <m>mission</m>."</h2>
                        <button
                            data-aos="fade-up"
                            id="studentButton"
                            onClick={() => props.history.push("/student")}
                        ><a>Student</a></button>
                        <button
                            data-aos="fade-up"
                            id="funderButton"
                            onClick={() => props.history.push("/funder")}
                        ><a data-aos="fade-up">Funder</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default callToAction;
