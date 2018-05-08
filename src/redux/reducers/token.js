import decode from 'jwt-decode'
import {
  FETCH_TOKEN_SUCCESS,
  FETCH_TOKEN_FAILED
} from '../actions/token'

const initialState = {
  exp: "",
  iat: "",
  loggedIn: false,
  sub: {},
  token: ""
}

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case FETCH_TOKEN_SUCCESS:
      return {...state, ...decode(payload)}
    case FETCH_TOKEN_FAILED:
      return {...state, ...decode(payload)}
    default:
      return state
  }
}
