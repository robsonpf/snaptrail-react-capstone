import React, { Component } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Input
} from 'reactstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createComment } from '../redux/actions/comments'

class AddComment extends Component {
  state = {
    comment: ''
  }

  handleCommentSubmit = (e) => {
    e.preventDefault()
    if (this.state.comment) this.props.createComment({
      content: this.state.comment,
      post_id: this.props.postId
    })
    this.setState({ comment: '' })
  }

  render() {
    return (
      <Form inline onClick={this.handleCommentSubmit}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input
            type="text"
            name="comment"
            id="comment-field"
            placeholder="Enter a comment here"
            onChange={(e) => this.setState({comment: e.target.value})}
            value={this.state.comment}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ createComment }, dispatch)

export default connect(null, mapDispatchToProps)(AddComment)
