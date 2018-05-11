import decode from "jwt-decode"
import { getUserById } from '../api/getUserById'

export const FETCH_TOKEN_SUCCESS = "FETCH_TOKEN_SUCCESS"
export const FETCH_TOKEN_FAILED = "FETCH_TOKEN_FAILED"

export const SET_TOKEN_SUCCESS = "SET_TOKEN_SUCCESS"
export const SET_TOKEN_FAILED = "SET_TOKEN_FAILED"

export const fetchToken = () => {
  return async dispatch => {
    try {
      const token = localStorage.getItem("token")

      if (!token) {
        localStorage.removeItem("token")
        dispatch({
          type: FETCH_TOKEN_FAILED,
          payload: token
        })
        return null
      }

      const { exp } = decode(token)
      if (exp * 1000 < Date.now()) {
        dispatch({
          type: FETCH_TOKEN_FAILED,
          payload: token
        })
        localStorage.removeItem("token")
      } else {
        const result = decode(token)
        const userReponse = await getUserById(result.sub.id)
        const signedInUser = await userReponse.json()
        
        dispatch({
          type: FETCH_TOKEN_SUCCESS,
          payload: {
            token,
            ...result,
            sub: signedInUser
          }
        })
      }
    } catch(err) {
      console.log('error = ', err);
      dispatch({
        type: FETCH_TOKEN_FAILED,
        payload: err
      })
    }
  }
}

export const setToken = token => {
  return async dispatch => {
    try {
      localStorage.setItem("token", token)
      dispatch({
        type: SET_TOKEN_SUCCESS,
        payload: token
       })
    } catch(error) {
      dispatch({
        type: SET_TOKEN_FAILED,
        payload: error
      })
    }
  }
}
