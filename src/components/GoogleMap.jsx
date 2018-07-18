import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setLatLng } from '../redux/actions/maps'

class GoogleMap extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    lat: "",
    lng: ""
  }

  onMapClicked = (mapProps, map, clickEvent) => {
    const lat = clickEvent.latLng.lat().toFixed(6)
    const lng = clickEvent.latLng.lng().toFixed(6)

    if (!this.props.readOnly) {
      this.setState({
        Marker: <Marker position={{ lat, lng }} />
      })
      this.props.setLatLng({ lat, lng })
    }

    if (this.state.showingInfoWindow) {
      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      });
    }
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      showingInfoWindow: true,
      activeMarker: marker,
      selectedPlace: props
    })
  }

  onInfoWindowClose = () => {
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    })
  }

  render() {
    return (
      <Map
        google={this.props.google}
        initialCenter={ !this.props.readOnly ? {
          lat: 37.769,
          lng: -122.446
        } : this.props.showAll ? {
          lat: 37.769,
          lng: -122.446
        } : {
          lat: this.props.lat,
          lng: this.props.lng
        }}
        zoom={this.props.showAll ? 6 : 11}
        onClick={this.onMapClicked}
      >
        {!this.props.readOnly ?
          (this.props.reset && this.state.Marker)
        : !this.props.showAll ?
          <Marker
            name={this.props.location}
            onClick={this.onMarkerClick}
            position={{ lat: this.props.lat, lng: this.props.lng }}/>
        : this.props.posts.map(post =>
          <Marker
            key={post.id}
            name={post.location}
            onClick={this.onMarkerClick}
            position={{ lat: post.latitude, lng: post.longitude }}
          />)}
        <InfoWindow
          marker={this.state.activeMarker}
          onClose={this.onInfoWindowClose}
          visible={this.state.showingInfoWindow}>
          <div>
            <h1 style={{ color: "black" }}>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    )
  }
}

const mapStateToProps = ({ posts, maps }) => ({
  posts: posts.allPosts,
  reset: maps.latLng.lat ? true : false
 })

const mapDispatchToProps = dispatch => bindActionCreators({ setLatLng }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`
})(GoogleMap))
