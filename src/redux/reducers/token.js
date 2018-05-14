import {
  FETCH_TOKEN_SUCCESS,
  FETCH_TOKEN_FAILED,
  SET_TOKEN_SUCCESS,
  SET_TOKEN_FAILED
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
      return {...state, ...payload}
    case FETCH_TOKEN_FAILED:
      return initialState
    case SET_TOKEN_SUCCESS:
      return {...state, ...payload}
    case SET_TOKEN_FAILED:
      return initialState
    default:
      return state
  }
}
