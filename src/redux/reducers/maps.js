import {
  SET_LATLNG_SUCCESS,
  SET_LATLNG_FAILED
} from '../actions/maps'

const initialState = {
  latLng: {
    lat: "",
    lng: ""
  }
}

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case SET_LATLNG_SUCCESS:
      return payload
    case SET_LATLNG_FAILED:
      return payload
    default:
      return state
  }
}
