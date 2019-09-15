import axios from 'axios'

export const FETCHING_GAMES_START = 'FETCHING_GAMES_START'
export const FETCHING_GAMES_SUCCESS = 'FETCHING_GAMES_SUCCESS'
export const FETCHING_GAMES_FAILURE = 'FETCHING_GAMES_FAILURE'
export const getGames = () => dispatch => {
    dispatch({ type: FETCHING_GAMES_START})
    axios
        .get('')
        .then(res => {
            console.log(res)
            dispatch({ type: FETCHING_GAMES_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log('something terrible happened')
            dispatch({ type: FETCHING_GAMES_FAILURE, payload: err})
        })
}