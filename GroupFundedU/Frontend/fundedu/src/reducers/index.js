import {
    SET_CURRENT_USER
} from '../constants';

const initialState = {
    currentUser: {}
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
        return state;
    }
}

export default rootReducer;