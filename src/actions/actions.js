// import dependencies and functions
import axios from 'axios'
import { AXIOS_URI } from '../config/rootConfig'
import { axiosWithAuth } from '../utils/axiosWithAuth'

// sign up/register new user
export const SIGNUP_USER_START = 'SIGNUP_USER_START'
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS'
export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE'
export const postUser = (credentials) => (dispatch) => {
  dispatch({ type: SIGNUP_USER_START })
  axios
    .post(AXIOS_URI + '/users', credentials)
    .then((res) => {
      console.log(res)
      dispatch({ type: SIGNUP_USER_SUCCESS, payload: res.data })
    })
    .catch((err) => {
      console.log(`unable to register user: ${err}`)
      dispatch({ type: SIGNUP_USER_FAILURE, payload: err })
    })
}

// login existing user
export const LOGIN_USER_START = 'LOGIN_USER_START'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE'
export const userLogin = (credentials) => (dispatch) => {
  dispatch({ type: LOGIN_USER_START })
  axios
    .post(AXIOS_URI + '/login', credentials)
    .then((res) => {
      console.log(res)
      localStorage.setItem('token', res.data.token)
      dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data })
    })
    .catch((err) => {
      console.log(`unable to load games data: ${err}`)
      dispatch({ type: LOGIN_USER_FAILURE, payload: err })
    })
}

// logout existing user
export const LOGOUT_USER_START = 'LOGOUT_USER_START'
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS'
export const LOGOUT_USER_FAILURE = 'LOGOUT_USER_FAILURE'
export const userLogout = () => (dispatch) => {
  dispatch({ type: LOGOUT_USER_SUCCESS })
  localStorage.setItem('token', null)
}

// get list of games
export const FETCHING_GAMES_START = 'FETCHING_GAMES_START'
export const FETCHING_GAMES_SUCCESS = 'FETCHING_GAMES_SUCCESS'
export const FETCHING_GAMES_FAILURE = 'FETCHING_GAMES_FAILURE'
export const getGames = (filterData) => (dispatch) => {
  dispatch({ type: FETCHING_GAMES_START })
  axios
    .get(AXIOS_URI + '/games/', { params: filterData })
    .then((res) => {
      console.log(res)
      dispatch({ type: FETCHING_GAMES_SUCCESS, payload: res.data })
    })
    .catch((err) => {
      console.log(`unable to load games data: ${err}`)
      dispatch({ type: FETCHING_GAMES_FAILURE, payload: err })
    })
}

// get list of data
export const FETCHING_DATALIST_START = 'FETCHING_DATALIST_START'
export const FETCHING_DATALIST_SUCCESS = 'FETCHING_DATALIST_SUCCESS'
export const FETCHING_DATALIST_FAILURE = 'FETCHING_DATALIST_FAILURE'
export const getDataList = () => (dispatch) => {
  dispatch({ type: FETCHING_DATALIST_START })
  axios
    .get(AXIOS_URI + '/games/datalist')
    .then((res) => {
      console.log('datalist response', res)
      dispatch({ type: FETCHING_DATALIST_SUCCESS, payload: res.data })
    })
    .catch((err) => {
      console.log(`unable to load data list: ${err}`)
      dispatch({ type: FETCHING_DATALIST_FAILURE, payload: err })
    })
}

// get user data
export const FETCHING_USER_DATA_START = 'FETCHING_USER_DATA_START'
export const FETCHING_USER_DATA_SUCCESS = 'FETCHING_USER_DATA_SUCCESS'
export const FETCHING_USER_DATA_FAILURE = 'FETCHING_USER_DATA_FAILURE'
export const getUserData = () => (dispatch) => {
  dispatch({ type: FETCHING_USER_DATA_START })
  axiosWithAuth()
    .get('  PLACEHOLDER!!!   ') // needs to be implemented in the back end
    .then((res) => {
      console.log(res)
      dispatch({ type: FETCHING_USER_DATA_SUCCESS, payload: res.data })
    })
    .catch((err) => {
      console.log(`unable to load user preferences data: ${err}`)
      dispatch({ type: FETCHING_USER_DATA_FAILURE, payload: err })
    })
}
