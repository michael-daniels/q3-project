import { combineReducers } from 'redux'

import commentsReducer from './commentsReducer'
import userReducer from './userReducer'
import allUsersReducer from './allUsersReducer'

export default combineReducers({
  user: userReducer,
  allusers: allUsersReducer,
  comments: commentsReducer
})
