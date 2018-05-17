import decode from "jwt-decode"
import { getUserById } from '../api/getUserById'
import { getAllPosts } from '../api/getAllPosts'
import { getPostsByUserId } from '../api/getPostByUserId'
import { postPost } from '../api/postPost'

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_FAILED = 'FETCH_POSTS_FAILED'

export const FETCH_POSTS_BY_USER_SUCCESS = 'FETCH_POSTS_BY_USER_SUCCESS'
export const FETCH_POSTS_BY_USER_FAILED = 'FETCH_POSTS_BY_USER_FAILED'

export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS'
export const CREATE_POST_FAILED = 'CREATE_POST_FAILED'

export const fetchPosts = () => {
  return async dispatch => {
    try {
      let response = await getAllPosts()
      let posts = await response.json()
      dispatch({
        type: FETCH_POSTS_SUCCESS,
        payload: posts
      })
    } catch(err) {
      dispatch({
        type: FETCH_POSTS_FAILED,
        payload: err
      })
    }
  }
}

export const fetchPostByUser = id => {
  return async dispatch => {
    try {
      let response = await getPostsByUserId(id, localStorage.getItem("token"))
      let postsByuser = await response.json()
      dispatch({
        type: FETCH_POSTS_BY_USER_SUCCESS,
        payload: postsByuser
      })
    } catch(error) {
      dispatch({
        type: FETCH_POSTS_BY_USER_FAILED,
        payload: error
      })
    }
  }
}

export const createPost = newPost => {
  return async dispatch => {
    try {
      let token = localStorage.getItem("token")
      let user_id = decode(token).sub.id

      let response = await postPost({ ...newPost, user_id }, token)
      let post = await response.json()

      const userReponse = await getUserById(user_id)
      const signedInUser = await userReponse.json()
      dispatch({
        type: CREATE_POST_SUCCESS,
        payload: { ...post[0], user: {...signedInUser}}
      })
    } catch (err) {
      dispatch({
        type: CREATE_POST_FAILED,
        payload: err
      })
    }
  }
}
