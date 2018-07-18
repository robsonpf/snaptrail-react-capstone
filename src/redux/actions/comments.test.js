import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './comments'
import fetchMock from 'fetch-mock'

const middlewares = [ thunk ]

const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('creates FETCH_COMMENTS_SUCCESS when fetching comments was successful', async () => {

    const comments = [
      {
        comment: "comment"
      }
    ]

    fetchMock.get('*', comments)

    console.log(fetchMock);


    const expectedActions = [
      { type: actions.FETCH_COMMENTS_SUCCESS, comments }
    ]

    const store = mockStore({ comments: {}})


    store.dispatch(await actions.getAllComments)
    expect(store.getActions()).toEqual(expectedActions)

    await store.dispatch(actions.getAllComments)
  })
})
