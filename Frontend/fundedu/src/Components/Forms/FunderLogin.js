import React, { useState, useEffect } from 'react';
// import './css/Login.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from './../../actions/authActions';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Nav from "../Nav/Nav"

const FunderLogin = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const formErrors = useSelector(state => state.errors);

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    const dispatch = useDispatch();

    if (isAuthenticated) {
        props.history.push('/dashboard')
    }

    useEffect(() => {
        setErrors(formErrors);
    }, [formErrors]);

    const onChangeEmail = e => {
        setEmail(e.target.value);
    }

    const onChangePassword = e => {
        setPassword(e.target.value);
    }

    const onClick = e => {
        e.preventDefault();
        let funder = {
            email: email,
            password: password
        }
        dispatch(loginUser(funder));
    };

    AOS.init({
        duration: 3000,
        mirror: true,
    })

    return (
        <div className="loginWrapper">
            <div>
                <div id="loginNav">
                    <Nav />
                </div>
                <div id="pageImage" data-aos="fade-up">
                    <h1>“The way to <m>get started</m> is to <m>quit talking</m> and <m>begin doing</m>.”</h1>
                </div>
                <div id="LoginForm" data-aos="fade-up">
                    <h1 id="loginText">Funder <m>Sign In</m></h1>
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
                    <form id="loginButton">
                        <button type="submit" onClick={onClick}>Sign In</button>
                    </form>
                    <p className="log-have-an-acc">
                        Don't have an account? <Link to="/funder/register">&nbsp;<m>Register</m></Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FunderLogin;