// import React from 'react';
// import ReactDOM from 'react-dom';
// import { MemoryRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import thunk from 'redux-thunk'
// import configureMockStore from 'redux-mock-store'
// import fetchMock from 'fetch-mock'
// import App from './App';
//
// const middlewares = [ thunk ]
// const mockStore = configureMockStore(middlewares)
// const store = mockStore({
//   token: {},
//   posts: {},
//   comments: [],
//   likes: [],
//   users: []
// })
//
// describe("App", () => {
//   afterEach(() => {
//     fetchMock.restore()
//   })
//
//   it('renders without crashing', () => {
//
//   });
//
//   const div = document.createElement('div');
//   ReactDOM.render(
//     <MemoryRouter>
//       <Provider store={ store }>
//         <App />
//       </Provider>
//     </MemoryRouter>,
//     div);
// })
