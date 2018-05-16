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
  Button,
  FormText
} from 'reactstrap'
import { Input } from 'semantic-ui-react'
import { updateUserPic } from '../redux/actions/users'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class ProfileCard extends Component {

  state = {
    user_image: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.updateUserPic(
      this.props.user_id,
      this.state.user_image
    )
    this.setState({
      user_image: ""
    })
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
          <Form onSubmit={this.handleSubmit}>
            <Input
              value={this.state.user_image}
              onChange={(e) => this.setState({ user_image: e.target.value })}
              size={"mini"}
              style={{ width: "100%" }}
              placeholder="Change Photo"
            />
          </Form>
        </div>

      </Card>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({updateUserPic}, dispatch)

export default connect(null, mapDispatchToProps)(ProfileCard)
