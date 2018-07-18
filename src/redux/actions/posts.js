import decode from "jwt-decode"
import { getUserById } from '../api/getUserById'
import { getAllPosts } from '../api/getAllPosts'
import { getPostsByUserId } from '../api/getPostByUserId'
import { postPost } from '../api/postPost'
import { deletePost } from '../api/deletePost'

export const FETCH_POSTS_PENDING = 'FETCH_POSTS_PENDING'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_FAILED = 'FETCH_POSTS_FAILED'

export const FETCH_POSTS_BY_USER_PENDING = 'FETCH_POSTS_BY_USER_PENDING'
export const FETCH_POSTS_BY_USER_SUCCESS = 'FETCH_POSTS_BY_USER_SUCCESS'
export const FETCH_POSTS_BY_USER_FAILED = 'FETCH_POSTS_BY_USER_FAILED'

export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS'
export const CREATE_POST_FAILED = 'CREATE_POST_FAILED'

export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS'
export const REMOVE_POST_FAILED = 'REMOVE_POST_FAILED'

export const fetchPosts = () => {
  return async dispatch => {
    try {
      dispatch({
        type: FETCH_POSTS_PENDING
      })
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
      dispatch({
        type: FETCH_POSTS_BY_USER_PENDING
      })
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
        payload: { ...post[0], user: {...signedInUser} }
      })
    } catch (err) {
      dispatch({
        type: CREATE_POST_FAILED,
        payload: err
      })
    }
  }
}

export const deleteUsersPost = (id, user_id) => {
  return async dispatch => {
    try {
      let response = await deletePost(id, user_id, localStorage.getItem("token"))
      if (response.status === 204) {
        dispatch({
          type: REMOVE_POST_SUCCESS,
          payload: { id }
        })
      }
    } catch(err) {
      dispatch({
        type: REMOVE_POST_FAILED,
        payload: err
      })
    }
  }
}
