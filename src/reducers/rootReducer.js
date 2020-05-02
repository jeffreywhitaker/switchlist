// import reducers
import { combineReducers } from 'redux'
import { loginReducer } from './loginReducer'
import { signupReducer } from './signupReducer'
import { gamesReducer } from './gamesReducer'
import { userReducer } from './userReducer'
import { datalistReducer } from './datalistReducer'

// export combined reducers
export default combineReducers({
  login: loginReducer,
  signup: signupReducer,
  games: gamesReducer,
  user: userReducer,
  datalist: datalistReducer,
})
