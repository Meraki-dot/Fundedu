import React from 'react';
import StudentMetaData from './metaData/studentMeta'
import './css/studentGetStarted.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Nav from "../Nav/Nav"

const student = (props) => {

    AOS.init({
        duration: 3000,
        mirror: true,
    })

    return (
        <div id="studentContainer">
            <div className="wrapper">
                <div id="titleContainer">
                    <div id="navContainer">
                        <Nav  />
                    </div>
                    <h2 class="item" data-aos="fade-up" id="studentTitle"><m id="studentTitlem">The</m> &nbsp;Student</h2>
                </div>
                <div id="buttonContainer" data-aos="fade-up">
                    <button class="item" onClick={() => props.history.push("/student/home")}>Get <m>started</m></button>
                </div>
                <div class="item" id="scroll-down">
                    <h6>Scroll Down</h6>
                </div>
            </div>

            <StudentMetaData />
        </div>
    );
}

export default student;