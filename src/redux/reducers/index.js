import { combineReducers } from 'redux'
import login from './login'
import signup from './signup'
import posts from '../reducers/posts'
import comments from '../reducers/comments'
import filter from '../reducers/filter'

console.log('in reducer index')

export default combineReducers({ login, signup, posts, comments, filter })
