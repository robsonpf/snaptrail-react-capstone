import {
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILED,
    UPDATE_USER_IMG_SUCCESS,
    UPDATE_USER_IMG_FAILED
} from '../actions/users'

const initialState = []

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case FETCH_USERS_SUCCESS:
      return [...payload]
    case FETCH_USERS_FAILED:
      return payload
    case UPDATE_USER_IMG_SUCCESS:
      const user = state.find(user => user.id === payload[0].id)
      const index = state.indexOf(user)
      return [
        ...state.slice(0, index),
        ...payload,
        ...state.slice(index + 1)
      ]
    case UPDATE_USER_IMG_FAILED:
      return payload
    default:
      return state
  }
}
