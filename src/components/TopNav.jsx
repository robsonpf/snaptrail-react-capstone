import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap'
import {
  Feed,
  Image,
  Label,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchToken } from '../redux/actions/token'
import FilterPosts from './FilterPosts'

const navbar = {backgroundColor: '#283e4a'}

class TopNav extends Component {

  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleLogout = () => {
    localStorage.removeItem("token")
    this.props.fetchToken()
  }

  handleProfile = (e) => {
    e.preventDefault()
    this.props.history.push(`/${this.props.user}`)
  }

  render() {
    return (
      <div>
        <Navbar
          style={navbar}
          dark
          expand="md"
          className="fixed-top"
        >
          <Link to="/">
            <Label as='a' color='blue' image size="huge">
              <img src="SnapTrails.png" />
              SnapTrails
            </Label>
          </Link>  
          {this.props.showFilterPost ? (
            <FilterPosts />
          ) : null}

          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar>
            {!this.props.loggedIn ? (
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to="/home" className="nav-link">Home</Link>
                </NavItem>
                <NavItem>
                  <Link to="/signup" className="nav-link">Sign Up</Link>
                </NavItem>
                <NavItem>
                  <Link to="/login" className="nav-link">Log In</Link>
                </NavItem>
              </Nav>
            ) : (
              <Nav className="ml-auto" navbar>

                <NavItem>
                  <Link
                    to={`${this.props.user}`}
                    className="nav-link"
                    onClick={this.handleProfile}
                  >
                    <Image
                      src={this.props.user_image}
                      avatar
                    />
                    <Feed.User className="text-primary">
                      <Label as="a" image>
                        {this.props.user}
                      </Label>
                    </Feed.User>
                  </Link>
                </NavItem>

                <NavItem style={{ paddingTop: "3.5px" }}>
                  <Link to="/home" className="nav-link">Home</Link>
                </NavItem>

                <NavItem style={{ paddingTop: "3.5px" }}>
                  <Link
                    to="/login"
                    className="nav-link"
                    onClick={this.handleLogout}
                  >
                    Log Out
                  </Link>
                </NavItem>
              </Nav>
            )}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    token: state.token,
    sub: state.token.sub,
    id: state.token.sub.id,
    user: state.token.sub.username,
    email: state.token.sub.email,
    user_image: state.users.length !== 0 && state.token.sub.user_image
      ? state.users.find(user => user.id === state.token.sub.id).user_image
      : null,
    loggedIn: state.token.loggedIn,
    exp: state.token.exp,
    iat: state.token.iat,
    showFilterPost: props.showFilterPost
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ fetchToken }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TopNav)
