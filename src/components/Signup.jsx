import React, { Component } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Container,
  Row,
  Col,
  Alert,
  Input
} from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userSignup } from '../redux/actions/signup'

export class Signup extends Component {
  state = {
    isFormValid: true,
    isValid: true,
    passwordClasses: 'form-control',
    username: '',
    email: '',
    password: '',
    verify_password: ''
  }

  handleSignup = e => {
    e.preventDefault()
    let { username, email, password, verify_password } = this.state
      if (!username || !email || !password || !verify_password) {
        this.setState({
          invalidForm: this.state.invalidForm + 'is-invalid',
          isFormValid: false
        })
      } else if (password !== verify_password) {
      this.setState({
        passwordClasses: this.state.passwordClasses + ' is-invalid',
        isValid: false
        })
      } else if (username && email && password) {
        let newUser = {username, email, password}
        this.setState({
          isValid: true,
          isFormValid: true
        })
      this.props.userSignup(newUser, this.props.history)
    }
  }

  render() {
    return (
      <Container className="main-wrapper">
        <Row style={{ marginTop: '10vh', marginBottom: '10vh' }}>
          <Col
            lg={{ size: 6, offset: 3 }}
            style={{
              border: '1px solid #c9c5c2',
              padding: 35,
              boxShadow: '0px 5px 15px 0px rgba(0,0,0,0.5)'
            }}
          >
            <Form onSubmit={this.handleSignup}>
              <FormGroup>
                <Label for="username">Username</Label>
                <Input
                  type="text"
                  name="username"
                  id="username-field"
                  placeholder="username"
                  value={this.state.username}
                  onChange={e =>
                    this.setState({ username: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email-field"
                  placeholder="email"
                  value={this.state.email}
                  onChange={e =>
                    this.setState({ email: e.target.value })
                  }
                />
              </FormGroup>

              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password-field"
                  placeholder="password"
                  value={this.state.password}
                  onChange={e =>
                    this.setState({ password: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="verify_password">Verify Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="verify_password"
                  placeholder="password"
                  value={this.state.verify_password}
                  onChange={e =>
                    this.setState({ verify_password: e.target.value })
                  }
                />
                {!this.state.isValid ? (
                  <Alert color="danger">Passwords do not match</Alert>
                ) : !this.state.isFormValid ? (
                  <Alert color="danger">Form must be filled!</Alert>
                  ) : null}
              {this.props.showSignupError ? (
                <Alert color="danger">{this.props.message}</Alert>
                ) : null}
              </FormGroup>
                <Button color="primary" type="submit">
                  Submit
                </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    message: state.signup.message,
    showSignupError: state.signup.showSignupError
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({userSignup}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
