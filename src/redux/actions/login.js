import decode from "jwt-decode"
import { postLogin } from '../api/postLogin'
import { getUserById } from '../api/getUserById'
import { setToken } from './token'
import { SET_TOKEN_SUCCESS } from './token'

export const LOGIN_PENDING = "LOGIN_PENDING"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILED = "LOGIN_FAILED"

export const checkLogin = (user, history) => {
  return async dispatch => {
    try {
      dispatch({ type: LOGIN_PENDING })

      const response = await postLogin(user)
      const token = response.headers.get("Authorization")
      const result = decode(token)
      const userReponse = await getUserById(result.sub.id)
      const signedInUser = await userReponse.json()

      dispatch({
        type: SET_TOKEN_SUCCESS,
        payload: {
          token,
          ...result,
          sub: signedInUser
        }
      })

      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          token,
          ...result,
          sub: signedInUser
        }
      })

      localStorage.setItem("token", token)
      history.push(`/${result.sub.user}`, {
        token,
        ...result,
        sub: signedInUser
      })
    } catch(err) {
      console.log('error = ', err);
      dispatch({
        type: LOGIN_FAILED,
        payload: err
      })
    }
  }
}
