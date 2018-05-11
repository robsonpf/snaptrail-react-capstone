export const USER_SIGNUP_PENDING = 'USER_SIGNUP_PENDING'
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED'

export const userSignup = (newUser, history) => {
  return async dispatch => {
    try {
      dispatch({type: USER_SIGNUP_PENDING})
      let response = await fetch(`${process.env.REACT_APP_API_URL}/signup`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newUser)
      })
      console.log("newUser ====>>>", newUser);
      let isSignedUp = await response.json()
      console.log(isSignedUp, ' === bad request or not');
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
      // console.log('history ===>', history);
    } catch(err) {
      dispatch({
        type: USER_SIGNUP_FAILED,
        payload: err
      })
    }
  }
}
