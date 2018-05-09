import {
  FILTER_POSTS_BY_LOCATION
} from '../actions/filter'

const initialState = []

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case FILTER_POSTS_BY_LOCATION:
      return payload
    default:
      return state
  }
}
