import React, { Component } from 'react';
import TopNav from './components/TopNav';
import SignUp from './components/Signup';
import Login from './components/Login';
import Feed from './components/Feed';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TopNav />
          <Switch>
            <Route exact path="/" component={Feed}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={SignUp}/>
          </Switch>
        </div>
      </Router>
    );
  }
}
