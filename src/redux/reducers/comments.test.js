import reducer from './comments'
import * as actions from '../actions/comments'
import deepFreeze from 'deep-freeze'

describe("comments reducer", () => {
  it("should rerturn the initial state", () => {
    expect(reducer(undefined, {})).toEqual([])
  })
  it("should handle FETCH_COMMENTS_SUCCESS", () => {
    const currentState = []
    deepFreeze(currentState)

    expect(
      reducer(currentState, {
        type: actions.FETCH_COMMENTS_SUCCESS,
        payload: []
      })
    ).toEqual([])
  })

  it("should handle CREATE_COMMENT_SUCCESS", () => {
    const currentState = [{comment: "yo this cool"}]
    deepFreeze(currentState)

    expect(
      reducer(currentState, {
        type: actions.CREATE_COMMENT_SUCCESS,
        payload: {comment: "How nice this trail"}
      })
    ).toEqual([{comment: "yo this cool"},{comment: "How nice this trail"}])
  })
})
