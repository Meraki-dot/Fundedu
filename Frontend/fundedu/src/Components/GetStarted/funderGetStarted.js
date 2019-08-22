import React from 'react';
import FunderMetaData from './metaData/funderMeta'
import './css/funderGetStarted.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Nav from "../Nav/Nav"

const funder = (props) => {

    AOS.init({
        duration: 3000,
        mirror: true,
    })

    return (
        <div id="funderContainer">
            <div className="wrapper">
                <div id="titleFunderContainer">
                    <div id="navContainer">
                        <Nav  />
                    </div>
                    <h2 class="item" data-aos="fade-up" id="funderTitle"><m id="funderTitlem">The</m> &nbsp;Funder</h2>
                </div>
                <div id="buttonContainer" data-aos="fade-up">
                    <button class="item" onClick={() => props.history.push("/funder/home")}>Get <m>started</m></button>
                </div>
                <div class="item" id="scroll-down">
                    <h6>Scroll Down</h6>
                </div>
            </div>

            <FunderMetaData />
        </div>
    );
}

export default funder;