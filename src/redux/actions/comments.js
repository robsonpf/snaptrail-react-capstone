import { getAllComments } from '../api/getAllComments'
import { postComment } from '../api/postComment'

export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS'
export const FETCH_COMMENTS_FAILED = 'FETCH_COMMENTS_FAILED'

export const CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS'
export const CREATE_COMMENT_FAILED = 'CREATE_COMMENT_FAILED'

export const fetchComments = () => {
  return async dispatch => {
    try {
      let response = await getAllComments()
      let comments = await response.json()
      dispatch({
        type: FETCH_COMMENTS_SUCCESS,
        payload: comments
      })
    } catch(err) {
      dispatch({
        type: FETCH_COMMENTS_FAILED,
        payload: err
      })
    }
  }
}

export const createComment = ({comment, post_id, user}) => {
  return async dispatch => {
    try {
      const token = localStorage.getItem("token")
      let user_id = user.id
      let response = await postComment({comment, post_id, user_id}, token)

      let newPost = await response.json()

      dispatch({
        type: CREATE_COMMENT_SUCCESS,
        payload: {...newPost[0], user}
      })
    } catch(err) {
      dispatch({
        type: CREATE_COMMENT_FAILED,
        payload: err
      })
    }
  }
}
