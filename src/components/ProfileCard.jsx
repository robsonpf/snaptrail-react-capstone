import React, { Component } from 'react'
import {
  Card,
  CardImg
} from 'reactstrap'

export default class ProfileCard extends Component {
  render() {
    return (
      <Card>
        <CardImg
          top
          width="100%"
          src={this.props.user_image}
          alt={this.props.user}
        />
        <div
          className="ml-4 mr-4 mt-2 mb-2 pl-4 pr-4 pt-2 pb-2 text-center"
          style={{ border: "black" }}>
          <h3 style={{
            background: "black",
            boxShadow: "0px 1px 1px 2px gainsboro",
            color: "ghostwhite"
          }}>
            "{`${this.props.user}`}"
          </h3>
        </div>
      </Card>
    )
  }
}
