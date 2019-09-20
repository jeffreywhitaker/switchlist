import {
    FETCHING_GAMES_START,
    FETCHING_GAMES_SUCCESS,
    FETCHING_GAMES_FAILURE,
    FETCHING_USER_START,
    FETCHING_USER_SUCCESS,
    FETCHING_USER_FAILURE
} from '../actions/actions'


const initialState = {
    games: [],
    user: [],
    publishers: [],
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_GAMES_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCHING_GAMES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                games: action.payload
            }
        case FETCHING_GAMES_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: `Unable to load games: ${action.payload}`
            }
        case FETCHING_USER_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCHING_USER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                users: action.payload
            }
        case FETCHING_USER_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: `Unable to load user: ${action.payload}`
            }
        default:
            return state
    }
}