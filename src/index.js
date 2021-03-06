import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import 'bootswatch/dist/materia/bootstrap.min.css'
import 'semantic-ui-css/semantic.min.css'
import { Provider } from 'react-redux'
import { fetchToken } from './redux/actions/token'
import { fetchPosts } from './redux/actions/posts'
import { fetchComments } from './redux/actions/comments'
import { fetchLikes } from './redux/actions/likes'
import { fetchUsers } from './redux/actions/users'
import store from './redux/store'

const newStore = store()

newStore.dispatch(fetchUsers())
newStore.dispatch(fetchToken())
newStore.dispatch(fetchPosts())
newStore.dispatch(fetchComments())
newStore.dispatch(fetchLikes())

ReactDOM.render(
  <Provider
    store={newStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
