import { combineReducers } from 'redux'
import token from './token'
import login from './login'
import signup from './signup'
import posts from '../reducers/posts'
import comments from '../reducers/comments'
import filter from '../reducers/filter'

console.log('in reducer index')

export default combineReducers({ token, login, signup, posts, comments, filter })
