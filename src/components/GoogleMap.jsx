import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setLatLng } from '../redux/actions/maps'

class GoogleMap extends Component {
  state = {
    lat: "",
    lng: ""
  }

  onMapClicked = (mapProps, map, clickEvent) => {
    const lat = clickEvent.latLng.lat().toFixed(6)
    const lng = clickEvent.latLng.lng().toFixed(6)

    this.setState({
      Marker: <Marker position={{ lat, lng }} />
    })
    this.props.setLatLng({ lat, lng })
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
        onClick={!this.props.readOnly ? this.onMapClicked : null}
      >
        {!this.props.readOnly ?
          this.state.Marker
        : !this.props.showAll ?
          <Marker position={{ lat: this.props.lat, lng: this.props.lng }}/>
        : this.props.posts.map(post => {
          return <Marker position={{ lat: post.latitude, lng: post.longitude }}/>
        })}
      </Map>
    )
  }
}

const mapStateToProps = ({ posts }) => ({ posts: posts.allPosts })

const mapDispatchToProps = dispatch => bindActionCreators({ setLatLng }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`
})(GoogleMap))
