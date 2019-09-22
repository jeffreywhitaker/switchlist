import {
    LOGIN_USER_START,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE
} from '../actions/actions'


const initialState = {
    isFetching: false,
    error: ''
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
                user: action.payload
            }
        case LOGIN_USER_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: `Unable to login user: ${action.payload}`
            }
        default:
            return state
    }
}