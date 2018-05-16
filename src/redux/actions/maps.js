export const SET_LATLNG_SUCCESS = "SET_LATLNG_SUCCESS"
export const SET_LATLNG_FAILED = "SET_LATLNG_FAILED"

export const setLatLng = latLng => {
  return async dispatch => {
    try {
      dispatch({ type: SET_LATLNG_SUCCESS, payload: latLng })
    } catch(error) {
      dispatch({ type: SET_LATLNG_FAILED, payload: error })
    }
  }
}
