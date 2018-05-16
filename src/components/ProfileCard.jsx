import React, { Component } from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Container,
  Row,
  Col,
  Alert,
  Input,
  Button,
  ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap'
import { Dropdown, Menu } from 'semantic-ui-react'

export default class ProfileCard extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Card>
        <CardImg
          top
          width="100%"
          src={this.props.user_image}
          alt={this.props.user}
        />
        <div
          className="ml-4 mr-4 mt-2 mb-2 pl-4 pr-4 pt-2 pb-2 text-center"
          style={{ border: "black" }}>
          <h3 style={{
            background: "black",
            boxShadow: "0px 1px 1px 2px gainsboro",
            color: "ghostwhite"
          }}>
            "{`${this.props.user}`}"
          </h3>
        </div>
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            Change Photo
          </DropdownToggle>
          <DropdownMenu>
            <Input inverted placeholder='Search...' />
            {/* <Input></Input> */}
            {/* <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem> */}
          </DropdownMenu>
        </ButtonDropdown>
      </Card>
    )
  }
}
