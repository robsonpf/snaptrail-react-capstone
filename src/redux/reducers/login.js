import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from '../actions/login'

const initialState = {
  exp: "",
  iat: "",
  isLoading: false,
  loggedIn: false,
  showLoginError: false,
  sub: {},
  token: ""
}

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case LOGIN_PENDING:
      return {...state, isLoading: true}
    case LOGIN_SUCCESS:
      return {...state, isLoading: false, showLoginError: false, message: LOGIN_SUCCESS, ...payload}
    case LOGIN_FAILED:
      return {...state, isLoading: false, showLoginError: true, ...payload}
    default:
      return state
  }
}
