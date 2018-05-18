import reducer from './users'
import * as actions from '../actions/users'
import deepFreeze from 'deep-freeze'

describe("user reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual([])
  })
  it("should handle FETCH_USERS_SUCCESS", () => {
    
  })
})
