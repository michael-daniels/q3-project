import { combineReducers } from 'redux'

import commentsReducer from './commentsReducer'
import userReducer from './userReducer'

export default combineReducers({
  user: userReducer,
  comments: commentsReducer
})
