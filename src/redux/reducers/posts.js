import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILED,
  FETCH_POSTS_BY_USER_SUCCESS,
  FETCH_POSTS_BY_USER_FAILED,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILED
} from '../actions/posts'

const initialState = {
  allPosts: [],
  userPosts: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        allPosts: [...payload]
      }
    case FETCH_POSTS_FAILED:
      return payload
    case FETCH_POSTS_BY_USER_SUCCESS:
      return {
        ...state,
        userPosts: [...payload]
      }
    case FETCH_POSTS_BY_USER_FAILED:
      return payload
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        allPosts: [...payload, ...state.allPosts]
      }
    case CREATE_POST_FAILED:
      return payload
    default:
      return state
  }
}
