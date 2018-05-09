import React, { Component } from 'react'
import {
  Button,
  Card,
  CardImg,
  CardText,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Container,
  Row,
  Col,
  Alert,
  Input
} from 'reactstrap'

export default class ProfileCard extends Component {
  render() {
    console.log(this.props);
    return (
      <Card>
        <CardImg
          top
          width="100%"
          // src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt7tPMuR7VoH3U-eMiL5yQuSiVP2EOIlIdglbs6fvkgjUO_YUU9w'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1diFxbaYWwzCu63oKrGCwwpAXWEkdN4brdI72QNMasIkYRGt4mg'
          alt="Grumpy Cat"
        />
        <hr className="my-4" />
        <h3 className="mt-1 text-center">
          "{`${this.props.user}`}"
        </h3>
      </Card>
    )
  }
}