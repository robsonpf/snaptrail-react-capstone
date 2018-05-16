import {
  SET_LATLNG_SUCCESS,
  SET_LATLNG_FAILED,
  TOGGLE_MAP_SUCCESS,
  TOGGLE_MAP_FAILED
} from '../actions/maps'

const initialState = {
  latLng: {
    lat: "",
    lng: ""
  },
  showMap: false
}

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case SET_LATLNG_SUCCESS:
      return { ...state, latLng: payload }
    case SET_LATLNG_FAILED:
      return payload
    case TOGGLE_MAP_SUCCESS:
      return { ...state, showMap: !payload }
    case TOGGLE_MAP_FAILED:
      return payload
    default:
      return state
  }
}
