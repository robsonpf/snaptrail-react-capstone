import {
  FETCH_POSTS_SUCESS,
  FETCH_POSTS_FAILED,
  CREATE_POST_SUCESS,
  CREATE_POST_FAILED
} from '../actions/posts'

const initialState = []

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_POSTS_SUCESS:
      return [...payload]
    case FETCH_POSTS_FAILED:
      return payload
    case CREATE_POST_SUCESS:
      return [...state, payload]
    case CREATE_POST_FAILED:
      return payload
    default:
      return state 
  }
}
