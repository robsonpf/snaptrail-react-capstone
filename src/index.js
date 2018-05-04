import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootswatch/dist/materia/bootstrap.min.css'
import { Provider } from 'react-redux';
import { fetchToken } from './redux/actions/token'
import store from './redux/store'

const newStore = store()

ReactDOM.render(
  <Provider
    store={newStore}>
    <App authenticate={fetchToken()}/>
  </Provider>,
  document.getElementById('root')
);
