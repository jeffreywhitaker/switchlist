import {
  FETCHING_DATALIST_START,
  FETCHING_DATALIST_SUCCESS,
  FETCHING_DATALIST_FAILURE,
} from '../actions/actions'

const initialState = {
  publishers: [],
  composers: [],
  isFetching: false,
  error: '',
}

export const datalistReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATALIST_START:
      return {
        ...state,
        isFetching: true,
        error: '',
      }
    case FETCHING_DATALIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        publishers: action.payload.publishers,
        composers: action.payload.composers,
      }
    case FETCHING_DATALIST_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: `Unable to fetch data list: ${action.payload}`,
      }
    default:
      return state
  }
}
