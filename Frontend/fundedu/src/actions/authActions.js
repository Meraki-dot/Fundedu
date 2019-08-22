import {
    SET_CURRENT_USER,
    GET_ERRORS,
    GET_ASSOCIATE_ID,
    ADD_ASSOCIATE_OBJECT,
    GET_DESTINATION,
    LOGOUT_USER
} from '../constants';

import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

export const registerUser = (userData, history, userType) => dispatch => {
    axios
        .post("http://localhost:5000/api/users/register", userData)
        .then(res => history.push(`/${userType}/login`))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

export const loginUser = userData => dispatch => {
    axios
        .post("http://localhost:5000/api/users/login", userData)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem("jwtToken", token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded))
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
};

export const logout = () => dispatch => {
    dispatch({ type: LOGOUT_USER, payload: {} })
}

export const logoutUser = () => dispatch => {
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    dispatch(setCurrentUser({}));
    logout();
};

export const addAssociate = (userId, newUser) => async dispatch => {
    console.log(newUser);
    await axios.put(`http://localhost:5000/api/users/${userId}`, newUser)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem("jwtToken", token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded))
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}

export const changeFunds = (currentId, newCurrent) => async dispatch => {
    console.log(newCurrent.id);
    await axios.put(`http://localhost:5000/api/users/${currentId}`, newCurrent)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem("jwtToken", token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded))
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}

export const sendFunds = (currentUser, acceptingUser) => async dispatch => {
    console.log('hello');
    console.log(acceptingUser.funds);
    console.log(currentUser.funds);
    await axios.put(`http://localhost:5000/api/users/${acceptingUser._id}`, acceptingUser)
    
    changeFunds(currentUser._id, currentUser);
}

export const getDestinationUser = (destinationId, fundsToSend) => async dispatch => {
    console.log('get destination');
    await axios.get(`http://localhost:5000/api/users/${destinationId}`)
        .then(res => {
            let newUser = {...res.data.data, funds: res.funds + fundsToSend}
            dispatch({ type: GET_DESTINATION, payload: newUser , funds: fundsToSend})
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}

export const setAssociateObject = (associateId) => async dispatch => {
    await axios.get(`http://localhost:5000/api/users/${associateId}`)
        .then(res => {
            console.log(res.data.data)
            dispatch({ type: GET_ASSOCIATE_ID, payload: res.data.data })
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}

export const addAssociateObject = (associateId) => async dispatch => {
    await axios.get(`http://localhost:5000/api/users/${associateId}`)
        .then(res => {
            console.log(res.data.data)
            dispatch({ type: ADD_ASSOCIATE_OBJECT, payload: res.data.data })
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}



