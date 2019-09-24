// import user actions
import {
    FETCHING_USER_DATA_START,
    FETCHING_USER_DATA_SUCCESS,
    FETCHING_USER_DATA_FAILURE
} from '../actions/actions'

// create initial login state
const initialState = {
    userData: [],
    isFetching: false,
    error: '',
    isLoggedIn: false
}

// export login reducer
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_USER_DATA_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCHING_USER_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                userData: action.payload
            }
        case FETCHING_USER_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: `Unable to fetch user data: ${action.payload}`
            }
        default:
            return state
    }
}