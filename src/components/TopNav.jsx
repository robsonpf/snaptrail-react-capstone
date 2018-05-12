import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem
} from 'reactstrap';
import {
  Feed,
  Icon,
  Image,
  Label,
  Dropdown,
  Menu
} from 'semantic-ui-react';
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchToken } from '../redux/actions/token';

const navbar = {backgroundColor: '#283e4a'};

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
          <Link to="/" style={{ fontSize: 40 }}>
            SnapTrails
          </Link>
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
                    to="/chausicle"
                    className="nav-link"
                    onClick={this.handleProfile}
                  >
                    <Image
                      // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1diFxbaYWwzCu63oKrGCwwpAXWEkdN4brdI72QNMasIkYRGt4mg"
                      src={this.props.user_image}
                      avatar
                    />
                    <Feed.User className="text-success">
                      <Label as="a" image>
                        {this.props.user}
                      </Label>
                    </Feed.User>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/home" className="nav-link">Home</Link>
                </NavItem>
                <NavItem>
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
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
              Option 1
                </DropdownItem>
                <DropdownItem>
              Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
              Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  console.log(state);
  console.log(props);
  return {
    token: state.token,
    sub: state.token.sub,
    id: state.token.sub.id,
    user: state.token.sub.username,
    email: state.token.sub.email,
    user_image: state.token.sub.user_image,
    loggedIn: state.token.loggedIn,
    exp: state.token.exp,
    iat: state.token.iat
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ fetchToken }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TopNav)
