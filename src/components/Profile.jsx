import React, { Component } from 'react'
import {
  Container,
  Row,
  Col,
  // Alert,
  // Button,
  // CardImg,
  // Form,
  // FormGroup,
  // Label,
  // Input
} from 'reactstrap'
import decode from 'jwt-decode'
import ProfileCard from './ProfileCard'

export default class Profile extends Component {
  render() {
    const {
      sub: { id, user },
      loggedIn,
      exp,
      iat
    } = decode(this.props.location.state)
    return (
      <Container fluid>
        {/* <Row>
          <Col sm={{ size: 6, offset: 0 }}>
            <h1 className="text-center">Welcome { user }</h1>
          </Col>
        </Row> */}
        <Row style={{marginTop: 20}}>
          <Col style={{marginTop: 100}} className="float-left fixed-top" sm={{size: 4, offset: 1}}>
            <ProfileCard user={user} />
          </Col>
          <Col style={{marginTop: 80}} sm={{size: 6, offset: 6}}>
            <h3>id: {id}</h3>
            <h3>user: {user}</h3>
            <h3>loggedIn: {loggedIn ? 'true' : 'false'}</h3>
            <h3>exp: {exp}</h3>
            <h3>iat: {iat}</h3>
          </Col>
        </Row>
      </Container>
    )
  }
}
