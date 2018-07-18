import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './users'
import fetchMock from 'fetch-mock'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe("async actions", () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it("creates FETCH_USERS_SUCCESS when fetching users has been done", async () => {
    fetchMock.get("*", ["stuff"])

    const expectedAction = [{ type: actions.FETCH_USERS_SUCCESS, payload: "" }]

    const store = mockStore()
    await store.dispatch(actions.fetchUsers())

    expect(store.getActions()).toEqual(expectedAction)
  })
})
