import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './filter'
import fetchMock from 'fetch-mock'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe("async actions", () => {
  it("creates FILTER_POSTS_BY_LOCATION", async () => {
    const filter = "STRING"

    const expectedAction = [{ type: actions.FILTER_POSTS_BY_LOCATION, payload: "string" }]
    const store = mockStore()

    await store.dispatch(actions.filterByLocation(filter))

    expect(store.getActions()).toEqual(expectedAction)
  })
})
