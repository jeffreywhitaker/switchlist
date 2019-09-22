import {
    FETCHING_PUBLISHERS_START,
    FETCHING_PUBLISHERS_SUCCESS,
    FETCHING_PUBLISHERS_FAILURE
} from '../actions/actions'


const initialState = {
    list: [],
    isFetching: false,
    error: ''
}

export const publishersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_PUBLISHERS_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCHING_PUBLISHERS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                list: action.payload
            }
        case FETCHING_PUBLISHERS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: `Unable to fetch publishers: ${action.payload}`
            }
        default:
            return state
    }
}