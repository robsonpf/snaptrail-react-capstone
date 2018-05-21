import {
  FETCH_POSTS_PENDING,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILED,
  FETCH_POSTS_BY_USER_PENDING,
  FETCH_POSTS_BY_USER_SUCCESS,
  FETCH_POSTS_BY_USER_FAILED,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILED,
  REMOVE_POST_SUCCESS,
  REMOVE_POST_FAILED
} from '../actions/posts'

const initialState = {
  isLoading: false,
  allPosts: [],
  userPosts: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_POSTS_PENDING:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allPosts: [...payload]
      }
    case FETCH_POSTS_FAILED:
      return payload
    case FETCH_POSTS_BY_USER_PENDING:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_POSTS_BY_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userPosts: [...payload]
      }
    case FETCH_POSTS_BY_USER_FAILED:
      return payload
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        allPosts: [{...payload}, ...state.allPosts]
      }
    case CREATE_POST_FAILED:
      return payload
    case REMOVE_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allPosts: [...state.filter(post => post.id !== payload.id)]
      }
    case REMOVE_POST_FAILED:
      return payload
    default:
      return state
  }
}
