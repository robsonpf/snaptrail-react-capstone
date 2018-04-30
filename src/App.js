import React, { Component } from 'react';
import TopNav from './components/TopNav';
import SignUp from './components/Signup';
import Login from './components/Login'

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TopNav />
        <Route path="/login" component={Login}/>
          <Route path="/signup" component={SignUp}/>
        </div>
      </Router>
    );
  }
}

export default App;
