import React, { Component } from 'react'
import Post from './Post'
import PostList from './PostList'
import FilterPosts from './FilterPosts'
import AddPostForm from './AddPostForm'
import ProfileCard from './AddPostForm'
import TopNav from './TopNav'
import { Container, Row, Col, Button } from 'reactstrap'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import decode from 'jwt-decode'
import { fetchUsers } from '../redux/actions/users'
import {
  Segment,
  Form
} from 'semantic-ui-react'
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
              {/* <Col sm={{size:8, offset: 1}}>
                <FilterPosts />
              </Col> */}
            </Row>
            <Row>
              <Col>
                <AddPostForm />
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
