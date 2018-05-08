import React, { Component } from 'react';
import TopNav from './components/TopNav';
import SignUp from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TopNav />
          <Switch>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/:profile" component={Profile}/>
          </Switch>
        </div>
      </Router>
    );
  }
}
