import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth'

// sign up user actions
export const SIGNUP_USER_START = 'SIGNUP_USER_START'
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS'
export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE'
export const postUser = (credentials) => dispatch => {
    dispatch({ type: SIGNUP_USER_START})
    axios
        .post('http://localhost:5000/users', credentials) // fill in URL
        .then(res => {
            console.log(res)
            dispatch({ type: SIGNUP_USER_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(`unable to register user: ${err}`)
            dispatch({ type: SIGNUP_USER_FAILURE, payload: err})
        })
}


// user login actions
export const LOGIN_USER_START = 'LOGIN_USER_START'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE'
export const userLogin = credentials => dispatch => {
    dispatch({ type: LOGIN_USER_START})
    axios
        .post('PLACEHOLDER!!!!', credentials) // fill in URL
        .then(res => {
            console.log(res)
            dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(`unable to load games data: ${err}`)
            dispatch({ type: LOGIN_USER_FAILURE, payload: err})
        })
}

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

// get list of publishers

export const FETCHING_PUBLISHERS_START = 'FETCHING_PUBLISHERS_START'
export const FETCHING_PUBLISHERS_SUCCESS = 'FETCHING_PUBLISHERS_SUCCESS'
export const FETCHING_PUBLISHERS_FAILURE = 'FETCHING_PUBLISHERS_FAILURE'
export const getPublishers = () => dispatch => {
    dispatch({ type: FETCHING_PUBLISHERS_START})
    axios
        .get('http://localhost:5000/publishers')
        .then(res => {
            console.log(res)
            dispatch({ type: FETCHING_PUBLISHERS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(`unable to load publishers data: ${err}`)
            dispatch({ type: FETCHING_PUBLISHERS_FAILURE, payload: err})
        })
}