import {
  SET_LATLNG_PENDING,
  SET_LATLNG_SUCCESS,
  SET_LATLNG_FAILED,
  TOGGLE_MAP_PENDING,
  TOGGLE_MAP_SUCCESS,
  TOGGLE_MAP_FAILED
} from '../actions/maps'

const initialState = {
  isLoading: false,
  latLng: {
    lat: "",
    lng: ""
  },
  showMap: false
}

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case SET_LATLNG_PENDING:
      return { ...state, isLoading: true }
    case SET_LATLNG_SUCCESS:
      return { ...state, isLoading: false,  latLng: payload }
    case SET_LATLNG_FAILED:
      return payload
    case TOGGLE_MAP_PENDING:
      return { ...state, isLoading: true }
    case TOGGLE_MAP_SUCCESS:
      return { ...state, isLoading: false,  showMap: !payload }
    case TOGGLE_MAP_FAILED:
      return payload
    default:
      return state
  }
}
