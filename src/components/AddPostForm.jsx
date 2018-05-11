import React, {Component} from 'react'
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { createPost } from '../redux/actions/posts';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

class AddPostForm extends Component {
  state = {
    image_url: '',
    description: '',
    location: '',
    latitude: '',
    longitude: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createPost(this.state);
    this.props.toggleForm();
  }

  render() {
    console.log(this.state);

    return (
      <Row>
        <Col sm="10">
          <Form onSubmit={this.handleSubmit}>
            {/* <FormGroup>
              <Label for="user-id-field">User Id</Label>
            <Input type="text"
               name="user-id"
               id="user-id-field"
               onChange={e => this.setState({ user_id: e.target.value })}/>
            </FormGroup> */}
            <FormGroup>
              <Label for="image-field">Image URL</Label>
            <Input type="text"
               name="image"
                id="image-field"
                 onChange={e => this.setState({ image_url: e.target.value })}/>
            </FormGroup>
            <FormGroup>
              <Label for="description-field">Description</Label>
            <Input type="text"
               name="description"
               id="description-field"
               onChange={e => this.setState({ description: e.target.value })} />
            </FormGroup>
            <FormGroup>
              <Label for="location-field">Location</Label>
            <Input type="text"
               name="location"
               id="location-field"
                onChange={e => this.setState({ location: e.target.value })}/>
            </FormGroup>
            <FormGroup>
              <Label for="latitude-field">Laditude</Label>
            <Input type="text"
               name="latitude"
               id="latitude-field"
                onChange={e => this.setState({ latitude: e.target.value })}/>
            </FormGroup>
            <FormGroup>
              <Label for="location-field">Longitude</Label>
            <Input type="text"
               name="longitude"
               id="longitude-field"
                onChange={e => this.setState({ longitude: e.target.value })}/>
            </FormGroup>
            <Button type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ createPost }, dispatch);

export default connect(null, mapDispatchToProps)(AddPostForm)
