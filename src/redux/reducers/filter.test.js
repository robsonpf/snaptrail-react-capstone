import reducer from './filter'
import * as actions from '../actions/filter'
import deepFreeze from 'deep-freeze'

describe("filter reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual("")
  })
  
  it("should handle FILTER_POSTS_BY_LOCATION", () => {
    const currentState = {}
    deepFreeze(currentState)

    expect(
      reducer(currentState, {
        type: actions.FILTER_POSTS_BY_LOCATION,
        payload: "something"
      })
    ).toEqual("something")
  })
})
