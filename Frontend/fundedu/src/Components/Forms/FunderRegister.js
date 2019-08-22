import React, { useState, useEffect } from 'react';
import './css/Register.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from './../../actions/authActions';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Nav from "../Nav/Nav"


const FunderRegister = (props) => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [errors, setErrors] = useState({});

    const formErrors = useSelector(state => state.errors);

    const dispatch = useDispatch();

    useEffect(() => {
        setErrors(formErrors);
    }, [formErrors])
    const onChangeFullName = e => {
        setFullName(e.target.value)
    }

    const onChangeEmail = e => {
        setEmail(e.target.value)
    }

    const onChangePassword = e => {
        setPassword(e.target.value)
    }

    const onChangePassword2 = e => {
        setPassword2(e.target.value)
    }

    const onClick = (e) => {
        e.preventDefault();

        const newUser = {
            name: fullName,
            email: email,
            password: password,
            password2: password2,
            userType: 'funder',
            funds: 0
        };

        dispatch(registerUser(newUser, props.history, newUser.userType));
    }

    AOS.init({
        duration: 3000,
        mirror: true,
    })

    return (
        <div className="registerWrapper">
            <div>
                <div id="registerNav">
                    <Nav />
                </div>
                <div id="pageImage" data-aos="fade-up">
                    <h1 id="quoteRegister">"Don't be afraid to give up the <m>good</m> to go for the <m>great</m>.</h1>
                </div>
                <div id="signUpForm" data-aos="fade-up">
                    <h1 id="SignUpText">Funder <m>Sign Up</m></h1>
                    <span className="red-text">
                        {errors.name}
                        {errors.email}
                        {errors.password}
                        {errors.password2}
                    </span>
                    <form id="signUpName" data-aos="fade-up">
                        <h5>FULL NAME</h5>
                        <input type="text" onChange={onChangeFullName} value={fullName} error={errors.name} />
                    </form>
                    <form id="signUpEmail" data-aos="fade-up">
                        <h5>E-MAIL</h5>
                        <input type="text" onChange={onChangeEmail} value={email} error={errors.email} />
                    </form>
                    <form id="signUpPass" data-aos="fade-up">
                        <h5>PASSWORD</h5>
                        <input type="password" onChange={onChangePassword} value={password} error={errors.password} />
                    </form>
                    <form id="signUpConfirm" data-aos="fade-up">
                        <h5>CONFIRM PASSWORD</h5>
                        <input type="password" onChange={onChangePassword2} value={password2} error={errors.password2} />
                    </form>
                    <form id="signUpButton" data-aos="fade-up">
                        <button type="submit" onClick={onClick}>Sign Up</button>
                    </form>
                    <p className="reg-have-an-acc" data-aos="fade-up">
                        Already have an account? <Link to="/funder/login">&nbsp;<m>Log in</m></Link>
                    </p>
                </div>
            </div>
        </div>
    )
}


export default FunderRegister;