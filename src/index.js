import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootswatch/dist/materia/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux';
import store from './redux/store'

const newStore = store()

ReactDOM.render(
  <Provider
    store={newStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
