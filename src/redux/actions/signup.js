import { postSignup } from '../api/postSignup'

export const USER_SIGNUP_PENDING = 'USER_SIGNUP_PENDING'
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED'

export const userSignup = (newUser, history) => {
  return async dispatch => {
    try {
      dispatch({type: USER_SIGNUP_PENDING})
      let response = await postSignup(newUser)

      let isSignedUp = await response.json()

      if (isSignedUp.status !== 400) {
        dispatch({
          type: USER_SIGNUP_SUCCESS,
          payload: isSignedUp
        })
        history.push("/login", isSignedUp)
      } else {
        dispatch({
          type: USER_SIGNUP_FAILED,
          payload: isSignedUp.message
        })
      }
    } catch(err) {
      dispatch({
        type: USER_SIGNUP_FAILED,
        payload: err
      })
    }
  }
}
