import React, {Component} from 'react'
// import { Row, Col, FormGroup, Label, Input, Button } from 'reactstrap'
import {
  Segment,
  Form,
  Button
} from 'semantic-ui-react'
import { createPost } from '../redux/actions/posts'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class AddPostForm extends Component {
  state = {
    image_url: '',
    description: '',
    location: '',
    latitude: '',
    longitude: ''
  };

  handleSubmit = e => {
    e.preventDefault()
    this.props.createPost(this.state)
  }

  render() {
    return (
      <Segment style={{backgroundColor:"#4D6A7F"}} inverted>
        <Form inverted style={{backgroundColor:"#4D6A7F"}} onSubmit={this.handleSubmit}>
          <Form.Input
            fluid label='Image URL'
            placeholder='Image URL'
            onChange={e => this.setState({ image_url: e.target.value })}/>
          <Form.Input
            fluid label='Description'
            placeholder='Description'
            onChange={e => this.setState({ description: e.target.value })}/>
          <Form.Input
            fluid label='Location'
            placeholder='Location'
            onChange={e => this.setState({ location: e.target.value })}/>
          <Form.Input
            fluid label='Latitude'
            placeholder='Latitude'
            onChange={e => this.setState({ latitude: e.target.value })}/>
          <Form.Input
            fluid label='Longitude'
            placeholder='Longitude'
            onChange={e => this.setState({ longitude: e.target.value })}/>
          <Button type='submit'>Submit</Button>
        </Form>
      </Segment>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ createPost }, dispatch)

export default connect(null, mapDispatchToProps)(AddPostForm)
