import {
    SET_CURRENT_USER
} from '../constants';

export const setCurrentUser = (user) => {
    console.log("user", user);
    return {type: SET_CURRENT_USER, payload: user};
}

