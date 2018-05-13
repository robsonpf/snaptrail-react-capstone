import decode from 'jwt-decode';

export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS'
export const FETCH_COMMENTS_FAILED = 'FETCH_COMMENTS_FAILED'

export const CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS'
export const CREATE_COMMENT_FAILED = 'CREATE_COMMENT_FAILED'

export const fetchComments = () => {
  return async dispatch => {
    try {
      let response = await fetch(`${process.env.REACT_APP_API_URL}/comments`)
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
      let response = await fetch(`${process.env.REACT_APP_API_URL}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': token
        },
        body: JSON.stringify({comment, post_id, user_id})
      })

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
