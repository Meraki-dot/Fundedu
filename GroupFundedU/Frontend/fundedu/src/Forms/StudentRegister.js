import React, { useState } from 'react';
// import { connect } from 'react-redux'

import './css/Register.css'


const StudentRegister = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    const onChangeFullName = (e) => {
        setFullName(e.target.value)
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const onChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }
    
    const onClick = (e) => {
        e.preventDefault();
    }

    return (
        <div className="wrapper">
            <div>
                <div id="pageImage">
                    <h1>Save Money!</h1>
                    <img id="computer" src={require("./images/computer.png")} alt="computer" />
                    <img id="creative" src={require("./images/creative.png")} alt="lightbulb" />
                    <img id="save-money" src={require("./images/save-money.png")} alt="money" />
                </div>
                <div id="signUpForm">
                <h1 id="SignUpText">Student Sign Up</h1>
                    <form id="signUpName">
                        <h5>FULL NAME</h5>
                        <input type="text" onChange={onChangeFullName} value={fullName}/>
                    </form>
                    <form id="signUpEmail">
                        <h5>E-MAIL</h5>
                        <input type="text" onChange={onChangeEmail} value={email}/>
                    </form>
                    <form id="signUpPass">
                        <h5>PASSWORD</h5>
                        <input type="password" onChange={onChangePassword} value={password}/>
                    </form>
                    <form id="signUpConfirm">
                        <h5>CONFIRM PASSWORD</h5>
                        <input type="password"  onChange={onChangeConfirmPassword} value={confirmPassword}/>
                    </form>
                    <form id="signUpButton">
                        <button type="submit" onClick={onClick}>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default StudentRegister;