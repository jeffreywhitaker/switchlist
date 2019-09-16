import {
    FETCHING_GAMES_START,
    FETCHING_GAMES_SUCCESS,
    FETCHING_GAMES_FAILURE
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
        default:
            return state
    }
}