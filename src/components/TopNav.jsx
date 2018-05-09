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
          <NavbarBrand href="/" >SnapTrails</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {!this.props.loggedIn ? (
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/home">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/signup">Sign Up</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/login">Log In</NavLink>
                </NavItem>
              </Nav>
            ) : (
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/login" onClick={this.handleLogout}>Log Out</NavLink>
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
