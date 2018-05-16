import { getAllUsers } from "../api/getAllUsers"
import { patchUserPic } from "../api/patchUserPic"

export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
export const FETCH_USERS_FAILED = "FETCH_USERS_FAILED"

export const UPDATE_USER_IMG_SUCCESS = "UPDATE_USER_IMG_SUCCESS"
export const UPDATE_USER_IMG_FAILED = "UPDATE_USER_IMG_FAILED"

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

export const updateUserPic = (id, user_image) => {
  return async dispatch => {
    try {
      let response = await patchUserPic(id, user_image, localStorage.getItem("token"))
      let updateUser = await response.json()
      dispatch({
        type: UPDATE_USER_IMG_SUCCESS,
        payload: updateUser
      })
    } catch(err) {
      dispatch({
        type: UPDATE_USER_IMG_FAILED,
        payload: err
      })
    }
  }
}
