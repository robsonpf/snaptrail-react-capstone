import {
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILED,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILED
} from '../actions/comments'

const initialState = []

export default (state = initialState, { type, payload }) =>{
  switch(type) {
    case FETCH_COMMENTS_SUCCESS:
      return [...payload]
    case FETCH_COMMENTS_FAILED:
      return payload
    case CREATE_COMMENT_SUCCESS:
      return [...state, {...payload}]
    case CREATE_COMMENT_FAILED:
      return payload
    default:
      return state
  }
}
