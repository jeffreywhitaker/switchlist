// import reducers
import { combineReducers } from 'redux'
import { loginReducer } from './loginReducer'
import { signupReducer } from './signupReducer'
import { gamesReducer } from './gamesReducer'
// import { userReducer } from './userReducer'
import { publishersReducer } from './publishersReducer'

// export combined reducers
export default combineReducers({
    login: loginReducer,
    signup: signupReducer,
    games: gamesReducer,
    // user: userReducer,
    publishers: publishersReducer
})