import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './css/Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from './../../actions/authActions';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Nav from "../Nav/Nav"


const StudentLogin = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const dispatch = useDispatch();

    const formErrors = useSelector(state => state.errors);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    if (isAuthenticated) {
        props.history.push('/dashboard');
    }

    useEffect(() => {
        setErrors(formErrors)
    }, [formErrors]);

    const onChangeEmail = e => {
        setEmail(e.target.value);
    }

    const onChangePassword = e => {
        setPassword(e.target.value);
    }

    const onClick = e => {
        e.preventDefault();
        let student = {
            email: email,
            password: password
        };

        dispatch(loginUser(student))
    }

    AOS.init({
        duration: 3000,
        mirror: true,
    })

    return (
        <div className="loginWrapper">
            <div>
                <div id="loginNav">
                    <Nav  />
                </div>
                <div id="pageImage">
                    <h1 data-aos="fade-up">"Your <m>limitation</m> - it's only your <m>imagination</m>."</h1>
                </div>
                <div id="LoginForm" data-aos="fade-up">
                    <h1 id="loginText">Student <m>Sign In</m></h1>
                    <span className="red-text">
                        {errors.email}
                        {errors.emailNotFound}
                    </span>
                    <span className="red-text">
                        {errors.password}
                        {errors.passwordIncorrect}
                    </span>
                    <form id="loginEmail">
                        <h5>E-MAIL</h5>
                        <input type="text" onChange={onChangeEmail} value={email} error={errors.email} />
                    </form>
                    <form id="loginPass">
                        <h5>PASSWORD</h5>
                        <input type="password" onChange={onChangePassword} value={password} error={errors.password} />
                    </form>
                    <form id="loginButton" >
                        <button type="submit" data-aos="fade-up" onClick={onClick}>Sign In</button>
                    </form>
                    <p className="log-have-an-acc">
                        Don't have an account? <Link id="link" to="/student/register">&nbsp;<m>Register</m></Link>
                    </p>
                </div>
            </div>
        </div>
    )
}


export default StudentLogin;