import { combineReducers } from 'redux';
import login from './login';
import signup from './signup';

console.log('in reducer index');

export default combineReducers({ login, signup })
