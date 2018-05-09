import React, { Component } from 'react'
import Post from './Post'
import PostList from './PostList'
import FilterPosts from './FilterPosts'
import AddPostForm from './AddPostForm'
import { Container, Row, Col, Button } from 'reactstrap'

class Feed extends Component {
  state = {

  }


  render() {
    return (
      <Container className="mt-4">
        <Row>
          <Col sm={{size:8, offset: 1}}>
            <FilterPosts />
          </Col>
          <Col sm="2">
            <Button
              color="secondary"
              onClick={() => this.setState({ showAddPost :
              !this.state.showAddPostForm})
              }>
              Add Post
            </Button>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col sm={{size: 11, offset: 1}}>
            {this.state.showAddPostForm && (
              <AddPostForm  toggleForm={this.toggleForm}/>
          )}
          </Col>
        </Row>
        <Row>
          <Col className="pr-0" sm={{size: 9, offset: 1}}>
            {/* Below is the Post component for each post. It is up to you how you would like to iterate over them. */}
            <PostList />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Feed