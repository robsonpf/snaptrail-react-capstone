import { combineReducers } from 'redux'
import token from './token'
import login from './login'
import signup from './signup'
import posts from './posts'
import comments from './comments'
import likes from './likes'
import filter from './filter'
import users from './users'
import maps from './maps'

export default combineReducers({
  token,
  login,
  signup,
  posts,
  comments,
  likes,
  filter,
  users,
  maps
})
