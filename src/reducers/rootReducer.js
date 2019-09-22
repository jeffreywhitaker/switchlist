import { combineReducers } from 'redux'
import { loginReducer } from './loginReducer'
import { signupReducer } from './signupReducer'
import { gamesReducer } from './gamesReducer'
import { publishersReducer } from './publishersReducer'

export default combineReducers({
    login: loginReducer,
    signup: signupReducer,
    games: gamesReducer,
    // userReducer,
    publishers: publishersReducer
})