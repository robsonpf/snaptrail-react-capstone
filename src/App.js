import React, { Component } from 'react'
import SignUp from './components/Signup'
import Login from './components/Login'
import Profile from './components/Profile'
import Feed from './components/Feed'
import Home from './components/Home'

import { HashRouter as Router, Switch, Route } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Feed}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/:profile" component={Profile}/>
          </Switch>
        </div>
      </Router>
    )
  }
}
