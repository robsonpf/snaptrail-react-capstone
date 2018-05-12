import {
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILED
} from '../actions/users'

const initialState = []

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case FETCH_USERS_SUCCESS:
      return [...payload]
    case FETCH_USERS_FAILED:
      return payload
    default:
      return state
  }
}
