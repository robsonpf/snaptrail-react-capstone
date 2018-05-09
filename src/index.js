import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootswatch/dist/materia/bootstrap.min.css'
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import { fetchToken } from './redux/actions/token'
import { getAllPosts } from './redux/actions/posts'
import store from './redux/store'

const newStore = store()

newStore.dispatch(getAllPosts())
newStore.dispatch(fetchToken())

ReactDOM.render(
  <Provider
    store={newStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
