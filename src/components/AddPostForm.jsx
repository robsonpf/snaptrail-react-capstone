import React, {Component} from 'react'
// import { Row, Col, FormGroup, Label, Input, Button } from 'reactstrap'
import {
  Segment,
  Form,
  Button,
  Label,
  Card,
  Dimmer,
  Loader
} from 'semantic-ui-react'
import { createPost } from '../redux/actions/posts'
import { setLatLng } from '../redux/actions/maps'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import GoogleMap from './GoogleMap'

class AddPostForm extends Component {
  state = {
    isLoading: true,
    image_url: '',
    description: '',
    location: '',
    latitude: '',
    longitude: '',
    showMap: true
  };

  componentWillMount = () => {
    this.setState({ isLoading: true })
  }

  componentDidMount = () => {
    this.setState({ isLoading: false })
  }

  handleToggleMap = () => {
    this.setState({ showMap: !this.state.showMap })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { image_url, description, location } = this.state
    const latitude = this.props.latitude
    const longitude = this.props.longitude
    if (image_url && description && location && latitude && longitude) {
      this.props.createPost({
        image_url,
        description,
        location,
        latitude,
        longitude
      })
      this.props.setLatLng({
        lat: null,
        lng: null
      })
      this.setState({
        image_url: '',
        description: '',
        location: '',
        latitude: '',
        longitude: ''
      })
    }
  }

  render() {
    return (
      <Segment style={{backgroundColor:"#4D6A7F"}} inverted>
        <Label
          as='a'
          color='orange'
          icon={ !this.state.showMap ? 'marker' : 'camera'}
          content={ !this.state.showMap ? 'Show all SnapTrail Posts' : 'Add a SnapTrail'}
          ribbon='left'
          onClick={ this.handleToggleMap }
        ></Label>
        {this.state.showMap ? (
          <Card color='teal' style={{ width: "100%", height: "500px" }}>
            {this.state.isLoading ? (
              <Dimmer active>
                <Loader>Loading Map</Loader>
              </Dimmer>
            ) : <GoogleMap fluid label='Map' readOnly={true} showAll={true}/>}
          </Card>
        ) : (
          <Form inverted style={{backgroundColor:"#4D6A7F"}} onSubmit={this.handleSubmit}>
            <Form.Input
              value={this.state.image_url}
              fluid label='Image URL'
              placeholder='Image URL'
              onChange={e => this.setState({ image_url: e.target.value })}/>
            <Form.Input
              value={this.state.description}
              fluid label='Description'
              placeholder='Description'
              onChange={e => this.setState({ description: e.target.value })}/>
            <Form.Input
              value={this.state.location}
              fluid label='Location'
              placeholder='Location'
              onChange={e => this.setState({ location: e.target.value })}/>
            <Label image as='a' size={"big"} className="text-primary">
              <img src='https://hotgeo.ru/uploads/posts/2018-07/1532879738_kapri-2.jpg' />
              Map: Drop Marker on your trail!
            </Label>
            <Card color='teal' style={{ width: "100%", height: "300px" }}>
              {this.state.isLoading ? (
                <Dimmer active>
                  <Loader>Loading Map</Loader>
                </Dimmer>
              ) : <GoogleMap fluid label='Map' readOnly={false}/>}
            </Card>
            <Button type='submit'>Submit</Button>
          </Form>
        )}
      </Segment>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    isLoading: state.maps.isLoading,
    latitude: state.maps.latLng.lat,
    longitude: state.maps.latLng.lng
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ createPost, setLatLng }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AddPostForm)
