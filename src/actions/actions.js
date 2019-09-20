import axios from 'axios'

// game actions

export const FETCHING_GAMES_START = 'FETCHING_GAMES_START'
export const FETCHING_GAMES_SUCCESS = 'FETCHING_GAMES_SUCCESS'
export const FETCHING_GAMES_FAILURE = 'FETCHING_GAMES_FAILURE'
export const getGames = () => dispatch => {
    dispatch({ type: FETCHING_GAMES_START})
    axios
        .get('http://localhost:5000/gamelist')
        .then(res => {
            console.log(res)
            dispatch({ type: FETCHING_GAMES_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(`unable to load games data: ${err}`)
            dispatch({ type: FETCHING_GAMES_FAILURE, payload: err})
        })
}

// user actions

export const FETCHING_USER_START = 'FETCHING_USER_START'
export const FETCHING_USER_SUCCESS = 'FETCHING_USER_SUCCESS'
export const FETCHING_USER_FAILURE = 'FETCHING_USER_FAILURE'
export const getUser = (id) => dispatch => {
    dispatch({ type: FETCHING_USER_START})
    axios
        .get(`http://localhost:5000/users/${id}`)
        .then(res => {
            console.log(res)
            dispatch({ type: FETCHING_USER_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(`unable to load games data: ${err}`)
            dispatch({ type: FETCHING_USER_FAILURE, payload: err})
        })
}