export const FILTER_POSTS_BY_LOCATION = "FILTER_POSTS_BY_LOCATION"

export const filterByLocation = location => {
  return async dispatch => {
    dispatch({
      type: FILTER_POSTS_BY_LOCATION,
      payload: location.toLowerCase()
    })
  }
}
