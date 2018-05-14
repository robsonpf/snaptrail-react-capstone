import React, { Component } from 'react'
import {
  Container,
  Row,
  Col
} from 'reactstrap'
import decode from 'jwt-decode'
import { Responsive } from 'semantic-ui-react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUsers } from '../redux/actions/users'
import PostList from './PostList'
import AddPostForm from './AddPostForm'
import TopNav from './TopNav'

class Feed extends Component {

  state = {
    showAddPostForm: false
  }

  componentWillMount = () => {
    const token = localStorage.getItem("token")

    if (token) {
      this.setState({
        loggedIn: decode(localStorage.getItem("token")).loggedIn
      })
      this.props.fetchUsers()
    } else {
      this.setState({
        loggedIn: false
      })
    }
  }

  toggleForm = () => {
    this.setState({ showAddPostForm : !this.state.showAddPostForm })
  }

  render() {
    return (
      this.state.loggedIn ? (
        <div>
          <TopNav showFilterPost={true} history={this.props.history}/>
          <Container style={{marginTop: 90}}>
            <Row>
              <Col>
                <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                  <Col
                    style={{marginTop: 100}}
                    className="float-left fixed-top"
                    sm={{size: 4, offset: 1}}>
                    <AddPostForm />
                  </Col>
                </Responsive>
                <Responsive {...Responsive.onlyMobile}>
                  <Col
                    style={{marginTop: 100}}
                    className="float-left"
                    md={{size: 3, offset: 1}}>
                    <AddPostForm />
                  </Col>
                </Responsive>
              </Col>
              <Col className="pr-0" sm={{size: 6, offset:1}}>
                <PostList posts={this.props.posts} />
              </Col>
            </Row>
          </Container>
        </div>
      ) : (
        <Redirect to="/login" />
      )
    )
  }
}

const mapStateToProps = (state, props) => {
  console.log(state.users);
  return {
    loggedIn: state.token.loggedIn,
    posts: state.posts.allPosts,
    users: state.users
  }
}

const mapDispatchToProps = dispatch =>
bindActionCreators({
  fetchUsers
}, dispatch )

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
