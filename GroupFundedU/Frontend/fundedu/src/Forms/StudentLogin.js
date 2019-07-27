import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUser } from '../actions'
import './css/Login.css'
import axios from 'axios';

const StudentLogin = ({ postStudentLogin }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.currentUser)

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const onClick = (e) => {
        e.preventDefault();
        let student = {
            email: email,
            password: password
        }
        axios.post("http://localhost:5000/api/users/login", student)
            .then(res => {
                console.log()
                dispatch(setCurrentUser(res.data));
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="wrapper">
            <div>
                <div id="pageImage">
                    <h1>Welcome Back!</h1>
                    <img id="computer" src={require("./images/computer.png")} alt="computer" />
                    <img id="creative" src={require("./images/creative.png")} alt="lightbulb" />
                    <img id="save-money" src={require("./images/save-money.png")} alt="money" />
                </div>
                <div id="LoginForm">
                    <h1 id="loginText">Student Sign In</h1>
                    <form id="loginEmail">
                        <h5>E-MAIL</h5>
                        <input type="text" onChange={onChangeEmail} value={email} />
                    </form>
                    <form id="loginPass">
                        <h5>PASSWORD</h5>
                        <input type="password" onChange={onChangePassword} value={password} />
                    </form>
                    <form id="loginButton">
                        <button type="submit" onClick={onClick}>Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default StudentLogin;