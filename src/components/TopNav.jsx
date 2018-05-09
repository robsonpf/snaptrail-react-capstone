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
  Image
} from 'semantic-ui-react';
import { Link } from 'react-router-dom'
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

  render() {
    return (
      <div>
        <Navbar
          style={navbar}
          dark
          expand="md"
          className="fixed-top"
        >
          <Link to="/" style={{ fontSize: 50 }}>
            SnapTrails
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {!this.props.loggedIn ? (
              <Nav className="ml-auto" navbar>
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
                    to="/login"
                    className="nav-link"
                    onClick={this.handleLogout}
                  >
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1diFxbaYWwzCu63oKrGCwwpAXWEkdN4brdI72QNMasIkYRGt4mg" avatar />
                  </Link>
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

  return {
    loggedIn: state.token.loggedIn
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ fetchToken }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TopNav)
