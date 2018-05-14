import { getAllLikes } from '../api/getAllLikes'
import { postLike } from '../api/postLike'
import { deleteLike } from '../api/deleteLike'

export const FETCH_LIKES_SUCCESS = "FETCH_LIKES_SUCCESS"
export const FETCH_LIKES_FAILED = "FETCH_LIKES_FAILED"

export const CREATE_LIKE_SUCCESS = "CREATE_LIKE_SUCCESS"
export const CREATE_LIKE_FAILED = "CREATE_LIKE_FAILED"

export const REMOVE_LIKE_SUCCESS = "REMOVE_LIKE_SUCCESS"
export const REMOVE_LIKE_FAILED = "REMOVE_LIKE_FAILED"

export const fetchLikes = () => {
  return async dispatch => {
    try {
      const response = await getAllLikes()
      const likes = await response.json()

      dispatch({
        type: FETCH_LIKES_SUCCESS,
        payload: likes
      })
    } catch(error) {
      dispatch({
        type: FETCH_LIKES_FAILED,
        payload: error
      })
    }
  }
}

export const createLike = newLike => {
  return async dispatch => {
    try {
      const response = await postLike(newLike, localStorage.getItem("token"))
      const like = await response.json()

      dispatch({
        type: CREATE_LIKE_SUCCESS,
        payload: like
      })
    } catch(error) {
      dispatch({
        type: CREATE_LIKE_FAILED,
        payload: error
      })
    }
  }
}

export const removeLike = id => {
  return async dispatch => {
    try {
      deleteLike(id, localStorage.getItem("token"))

      dispatch({
        type: REMOVE_LIKE_SUCCESS,
        payload: id
      })
    } catch(error) {
      dispatch({
        type: REMOVE_LIKE_FAILED,
        payload: error
      })
    }
  }
}
