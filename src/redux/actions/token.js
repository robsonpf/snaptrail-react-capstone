import decode from "jwt-decode"

export const FETCH_TOKEN_SUCCESS = "FETCH_TOKEN_SUCCESS"
export const FETCH_TOKEN_FAILED = "FETCH_TOKEN_FAILED"

export const fetchToken = () => {
  return async dispatch => {
    try {
      const token = localStorage.getItem("token")

      if (!token) {
        localStorage.removeItem("token")
        return null
      }

      const { exp } = decode(token)
      if (exp * 1000 < Date.now()) {
        dispatch({
          type: FETCH_TOKEN_FAILED,
          payload: token
        })
        localStorage.removeItem("token")
      }

      dispatch({
        type: FETCH_TOKEN_SUCCESS,
        payload: token
      })
    } catch(err) {
      console.log('error = ', err);
      dispatch({
        type: FETCH_TOKEN_FAILED,
        payload: err
      })
    }
  }
}
