import decode from "jwt-decode"
import { postLogin } from '../api/postLogin'
import { getUserById } from '../api/getUserById'
import { SET_TOKEN_SUCCESS } from './token'

export const LOGIN_PENDING = "LOGIN_PENDING"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILED = "LOGIN_FAILED"

export const checkLogin = (user, history) => {
  return async dispatch => {
    try {
      dispatch({ type: LOGIN_PENDING })

      const response = await postLogin(user)
      console.log("res",response);
      const token = response.headers.get("Authorization")
      console.log("tok",token);
      const result = decode(token)
      console.log("res",result);
      const userReponse = await getUserById(result.sub.id)
      console.log("use", userReponse);
      const signedInUser = await userReponse.json()
      console.log("sig",signedInUser);

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
      dispatch({
        type: LOGIN_FAILED,
        payload: err
      })
    }
  }
}
