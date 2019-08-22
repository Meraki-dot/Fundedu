import {
    SET_CURRENT_USER, ADD_ASSOCIATE, GET_ASSOCIATE_ID, ADD_ASSOCIATE_OBJECT, GET_DESTINATION, LOGOUT_USER
} from '../constants';

import { sendFunds } from '../actions/authActions';
const isEmpty = require('is-empty');

const initialState = {
    currentUser: {},
    isAuthenticated: false,
    associateObjects: [],
    fundsDestination: {}
}

const setUser = (state, action) => {
    return {
        ...state,
        currentUser: action.payload,
        isAuthenticated: !isEmpty(action.payload)
    }
};

const setAssociateNames = (state, action) => {

    return {
        ...state,
        associateObjects: [...state.associateObjects, action.payload]
    }
}

const setFundsDestination = (state, action) => {
    let newCurrent = state.currentUser;
    newCurrent.funds -= action.funds;
    console.log('about to send funds')
    sendFunds(newCurrent, action.payload);
    console.log('should have sent fuds')
    return {
        ...state,
        currentUser: newCurrent,
        fundsDestination: action.payload
    }
}

const logoutUser = (state, action) => {
    return {
        ...state,
        associateObjects: action.payload
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return setUser(state, action);
        case ADD_ASSOCIATE:
            return setUser(state, action);
        case GET_ASSOCIATE_ID:
            return setAssociateNames(state, action);
        case ADD_ASSOCIATE_OBJECT:
            return setAssociateNames(state, action);
        case GET_DESTINATION:
            return setFundsDestination(state, action);
        case LOGOUT_USER:
            return logoutUser(state, action);
        default:
            return state
    }
}