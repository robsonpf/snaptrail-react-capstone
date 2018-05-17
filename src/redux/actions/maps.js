export const SET_LATLNG_PENDING = "SET_LATLNG_PENDING"
export const SET_LATLNG_SUCCESS = "SET_LATLNG_SUCCESS"
export const SET_LATLNG_FAILED = "SET_LATLNG_FAILED"

export const TOGGLE_MAP_PENDING = "TOGGLE_MAP_PENDING"
export const TOGGLE_MAP_SUCCESS = "TOGGLE_MAP_SUCCESS"
export const TOGGLE_MAP_FAILED = "TOGGLE_MAP_FAILED"

export const setLatLng = latLng => {
  return async dispatch => {
    try {
      dispatch({ type: SET_LATLNG_PENDING })
      dispatch({ type: SET_LATLNG_SUCCESS, payload: latLng })
    } catch(error) {
      dispatch({ type: SET_LATLNG_FAILED, payload: error })
    }
  }
}

export const toggleMap = showMap => {
  return async dispatch => {
    try {
      dispatch({ type: TOGGLE_MAP_PENDING })
      dispatch({ type: TOGGLE_MAP_SUCCESS, payload: showMap })
    } catch(error) {
      dispatch({ type: TOGGLE_MAP_FAILED, payload: error })
    }
  }
}
