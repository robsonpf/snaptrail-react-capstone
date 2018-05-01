import React, { Component } from 'react';
import TopNav from './components/TopNav';
import SignUp from './components/Signup';
import Login from './components/Login';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import store from './redux/store'

const newStore = store()

export default class App extends Component {
  render() {
    return (
      <Provider
        store={newStore}>
        <Router>
          <div className="App">
            <TopNav />
            <Switch>
              <Route path="/login" component={Login}/>
              <Route path="/signup" component={SignUp}/>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
