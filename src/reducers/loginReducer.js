import {
    LOGIN_USER_START,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGOUT_USER_START,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAILURE
} from '../actions/actions'


const initialState = {
    isFetching: false,
    error: '',
    isSuccessful: false
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isSuccessful: true
            }
        case LOGIN_USER_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: `Unable to login user: ${action.payload}`
            }
        case LOGOUT_USER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isSuccessful: false
            }
        default:
            return state
    }
}