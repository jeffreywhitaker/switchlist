import {
    SIGNUP_USER_START,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE
} from '../actions/actions'


const initialState = {
    isFetching: false,
    error: ''
}

export const signupReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_USER_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case SIGNUP_USER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                user: action.payload
            }
        case SIGNUP_USER_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: `Unable to register user: ${action.payload}`
            }
        default:
            return state
    }
}