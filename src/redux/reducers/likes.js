import {
  FETCH_LIKES_SUCCESS,
  FETCH_LIKES_FAILED,
  CREATE_LIKE_SUCCESS,
  CREATE_LIKE_FAILED,
  REMOVE_LIKE_SUCCESS,
  REMOVE_LIKE_FAILED
} from '../actions/likes'

const initialState = []

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case FETCH_LIKES_SUCCESS:
      return [...payload]
    case FETCH_LIKES_FAILED:
      return payload
    case CREATE_LIKE_SUCCESS:
      return [...state, ...payload]
    case CREATE_LIKE_FAILED:
      return payload
    case REMOVE_LIKE_SUCCESS:
      return state.filter(like => like.id !== payload)
    case REMOVE_LIKE_FAILED:
      return payload
    default:
      return state
  }
}
