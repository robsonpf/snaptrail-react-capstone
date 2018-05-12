import { getAllUsers } from "../api/getAllUsers"

export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
export const FETCH_USERS_FAILED = "FETCH_USERS_FAILED"

export const fetchUsers = () => {
  return async dispatch => {
    try {
      let response = await getAllUsers()
      let users = await response.json()
      dispatch({
        type: FETCH_USERS_SUCCESS,
        payload: users
      })
    } catch(err) {
      dispatch({
        type: FETCH_USERS_FAILED,
        payload: err
      })
    }
  }
}
