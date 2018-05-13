import React, { Component } from 'react'
import {
  Container,
  Row,
  Col,
} from 'reactstrap'
import {
  Responsive,
  Segment
} from 'semantic-ui-react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import decode from 'jwt-decode'
import { fetchPostByUser } from '../redux/actions/posts'
import ProfileCard from './ProfileCard'
import PostList from './PostList'
import TopNav from './TopNav'

class Profile extends Component {

  componentWillMount = () => {
    const token = localStorage.getItem("token")

    if (token) {
      const { loggedIn, sub: { id } } = decode(localStorage.getItem("token"))

      this.setState({
        // ...this.props.location.state,
        loggedIn: decode(localStorage.getItem("token")).loggedIn
      })

      this.props.fetchPostByUser(id)
    } else {
      this.setState({
        loggedIn: false
      })
    }
  }

  render() {
    return (
      <div>
        {this.state.loggedIn ? (
          <div>
            <TopNav showFilterPost={false} history={this.props.history}/>
            <Container fluid>
              {/* <Row>
                <Col sm={{ size: 6, offset: 0 }}>
                <h1 className="text-center">Welcome { user }</h1>
                </Col>
              </Row> */}
              <Row style={{marginTop: 20}}>
                {/* <Responsive as={Segment} minWidth={432}> */}
                <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                  <Col
                    style={{marginTop: 100}}
                    className="float-left fixed-top"
                    sm={{size: 2, offset: 1}}>
                    <ProfileCard
                      user={this.props.user}
                      user_image={this.props.user_image}
                    />
                  </Col>
                </Responsive>
                {/* <Responsive as={Segment} maxWidth={431}> */}
                <Responsive {...Responsive.onlyMobile}>
                  <Col
                    style={{marginTop: 100}}
                    className="float-left"
                    md={{size: 3, offset: 1}}>
                    <ProfileCard
                      user={this.props.user}
                      user_image={this.props.user_image}
                    />
                  </Col>
                </Responsive>
                <Col style={{marginTop: 80}} md={{size: 5, offset: 4}}>
                  <PostList posts={this.props.posts}/>
                </Col>
              </Row>
            </Container>
          </div>
        ) : (
          <Redirect to="/login" />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  console.log('state in profile = ', state);
  console.log('props in profile = ', props);
  return {
    posts: state.posts.userPosts,
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

const mapDispatchToProps = dispatch => bindActionCreators({ fetchPostByUser }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
