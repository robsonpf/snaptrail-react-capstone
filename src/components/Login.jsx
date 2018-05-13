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
import { checkLogin } from '../redux/actions/login'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isLoading: false
  }

  getLogin = async (e) => {
    e.preventDefault()
    console.log("state", this.state);
    console.log("history", this.props.history);
    if (this.state.username && this.state.password) {
      this.props.checkLogin({
        username: this.state.username,
        password: this.state.password
      }, this.props.history)
    }
  }

  render() {
    return (
      <Container className="main-wrapper">
        <Row style={{ marginTop: '25vh' }}>
          <Col
            lg={{ size: 6, offset: 3 }}
            style={{
                border: '1px solid #c9c5c2',
                padding: 35,
                boxShadow: '0px 5px 15px 0px rgba(0,0,0,0.5)'
            }}
          >
            <Form onSubmit={this.getLogin}>
              <FormGroup>
                <Label for="username-field">Username</Label>
                <Input
                  type="username"
                  name="username"
                  id="username-field"
                  placeholder="username"
                  value={this.state.username}
                  onChange={e => this.setState({username: e.target.value})}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password-field">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="pass-field"
                  placeholder="password"
                  value={this.state.password}
                  onChange={e => this.setState({password: e.target.value})}
                />
              </FormGroup>
              {this.props.showLoginError ? (
                <Alert color="primary">
                  Either your username or password is incorrect. Please try again.
                </Alert>
              ) : null}
              <Button className="mr-3"  type="submit" color="primary">
                Submit
              </Button>
              <a href="/signup">Not a member?</a>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    showLoginError: state.login.showLoginError
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ checkLogin }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)
