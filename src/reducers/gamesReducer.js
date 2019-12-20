// import actions
import {
  FETCHING_GAMES_START,
  FETCHING_GAMES_SUCCESS,
  FETCHING_GAMES_FAILURE,
} from '../actions/actions'

// set initial state for games reducer
const initialState = {
  list: [],
  isFetching: false,
  error: '',
}

// export games reducer
export const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_GAMES_START:
      return {
        ...state,
        isFetching: true,
        error: '',
      }
    case FETCHING_GAMES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        list: action.payload,
      }
    case FETCHING_GAMES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: `Unable to login user: ${action.payload}`,
      }
    default:
      return state
  }
}
