import decode from "jwt-decode"
import { postLogin } from '../api/postLogin'

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
      console.log(result);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          token,
          ...result
        }
      })
      
      localStorage.setItem("token", token)
      history.push("/profile", token)
    } catch(err) {
      console.log('error = ', err);
      dispatch({
        type: LOGIN_FAILED,
        payload: err
      })
    }
  }
}
