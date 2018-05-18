import React, { Component } from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardTitle,
  CardBody,
  Row,
  Col,
  NavItem
} from 'reactstrap'
import {
  Feed,
  Image,
  Button,
  Label,
  Dimmer,
  Loader,
  Dropdown,
  Link
} from 'semantic-ui-react'
import FaThumbsUp from 'react-icons/lib/fa/thumbs-up'
import FaThumbsDown from 'react-icons/lib/fa/thumbs-down'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createComment } from '../redux/actions/comments'
import { createLike } from '../redux/actions/likes'
import { removeLike } from '../redux/actions/likes'
import { toggleMap } from '../redux/actions/maps'
import Moment from 'react-moment'
import CommentDropDown from './CommentDropDown'
import GoogleMap from './GoogleMap'


class Post extends Component {

  state = {
    showMap: false
  }

  handleLike = (e, createOrRemoveLike, likeOrDislike, post_id, user_id, like) => {
    e.preventDefault()
    if (likeOrDislike === "like") {
      createOrRemoveLike({ post_id, user_id })
    }
    else if (likeOrDislike === "dislike") {
      createOrRemoveLike(like.id)
    }
  }

  handleToggleMap = () => {
    this.setState({ showMap: !this.state.showMap })
  }

  render() {
    let {
      id,
      user_id,
      image_url,
      description,
      location,
      latitude,
      longitude,
      created_at,
      user: { email, username }
    } = this.props.post

  return (
    <Row className="mt-3">
      {this.props.isLoading ? (
        <Dimmer active inverted>
          <Loader>Fetching Posts</Loader>
        </Dimmer>
      ) : null}

      <Card>
        <CardBody>
          {/* <Link></Link> */}
          <Dropdown placeholder='Select Friend' fluid selection options={1, 2, 3}/>
          <Image
            src={this.props.user_image}
            avatar
          />
          <Feed.User className="text-primary">
            <strong>
              {username}
            </strong>
          </Feed.User>
          <Feed.Date><Moment fromNow ago>{created_at}</Moment> ago</Feed.Date>
          <Label
            as='a'
            color='orange'
            icon={ !this.state.showMap ? 'marker' : 'camera'}
            content={ !this.state.showMap ? 'Show Location' : 'Show Photo'}
            ribbon='right'
            onClick={ this.handleToggleMap }
          ></Label>
          <CardTitle>
            {location}
          </CardTitle>
          <CardText style={{ paddingBottom: 0 }}>
            {description}
          </CardText>
        </CardBody>
        {!this.state.showMap ? (
          <CardImg
            top
            width="100%"
            src={image_url}
            alt="Card image cap"
          />) : (
            <Card color='orange' style={{ width: "100%", height: "300px" }}>
              <GoogleMap
                fluid
                label='Map'
                readOnly={true}
                location={location}
                lat={latitude}
                lng={longitude}
              />
            </Card>
          )
        }
        <CardBody>
          <CardText className="text-primary">
            {`  `} {this.props.likes.length} {`  `}
            {this.props.likes.length !== 1 ? 'Likes' : 'Like'}
            {`  •  `}
            {`  `} {this.props.comments.length} {`  `}
            {this.props.comments.length !== 1 ? 'Comments' : 'Comment'}
          </CardText>
        </CardBody>
        <CardBody>
          {this.props.isLike ? (
            <Button
              style={{ padding: "12px 10px", float: "left" }}
              onClick={e => this.handleLike(e, this.props.removeLike, "dislike", id, this.props.userId, this.props.like)}>
              <FaThumbsDown className="text-primary"/>Dislike
            </Button>
          ) : (
            <Button
              style={{ padding: "12px 10px", float: "left" }}
              onClick={e => this.handleLike(e, this.props.createLike, "like", id, this.props.userId)}>
              <FaThumbsUp className="text-primary"/>Like
            </Button>
          )}
          <CommentDropDown style={{ float: "left" }} postId={id} comments={this.props.comments}/>
        </CardBody>
      </Card>
    </Row>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    isLoading: state.posts.isLoading,
    showMap: state.maps.showMap,
    user_image: state.users.length > 0
      ? state.users.find(user => user.id === props.post.user_id).user_image
      : null,
    comments: state.comments.filter(comment => comment.post_id === props.post.id),
    likes: state.likes.filter(like => like.post_id === props.post.id),
    isLike: state.likes.find(like => (like.user_id === state.token.sub.id && like.post_id === props.post.id)) ? true : false,
    userId: state.token.sub.id,
    like: state.likes.find(like => (like.user_id === state.token.sub.id && like.post_id === props.post.id))
  }
}

const mapDispatchToProps = dispatch =>
bindActionCreators({
  createComment,
  createLike,
  removeLike,
  toggleMap
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Post)
