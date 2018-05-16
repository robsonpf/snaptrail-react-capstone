import React from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardTitle,
  CardBody,
  Row
} from 'reactstrap'
import {
  Feed,
  Image,
  Button
} from 'semantic-ui-react'
import FaThumbsUp from 'react-icons/lib/fa/thumbs-up'
import FaThumbsDown from 'react-icons/lib/fa/thumbs-down'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createComment } from '../redux/actions/comments'
import { createLike } from '../redux/actions/likes'
import { removeLike } from '../redux/actions/likes'
import Moment from 'react-moment'
import CommentDropDown from './CommentDropDown'

const handleLike = (e, createOrRemoveLike, likeOrDislike, post_id, user_id, like) => {
  e.preventDefault()
  if (likeOrDislike === "like") {
    createOrRemoveLike({ post_id, user_id })
  }
  else if (likeOrDislike === "dislike") {
    createOrRemoveLike(like.id)
  }
}

const Post = (props) => {
  let {
    id,
    user_id,
    image_url,
    description,
    location,
    created_at,
    user: { email, username }
  } = props.post


  return (
    <Row className="mt-3">
      <Card>
        <CardBody>
          <Image
            src={props.user_image}
            avatar
          />
          <Feed.User className="text-primary">
            <strong>
              {username}
            </strong>
          </Feed.User>
          <Feed.Date><Moment fromNow ago>{created_at}</Moment> ago</Feed.Date>
          <CardTitle>
            {location}
          </CardTitle>
          <CardText style={{ paddingBottom: 0 }}>
            {description}
          </CardText>
        </CardBody>
        <CardImg
          top
          width="100%"
          src={image_url}
          alt="Card image cap"
        />
        <CardBody>
          <CardText className="text-primary">
            {`  `} {props.likes.length} {`  `}
            {props.likes.length !== 1 ? 'Likes' : 'Like'}
            {`  •  `}
            {`  `} {props.comments.length} {`  `}
            {props.comments.length !== 1 ? 'Comments' : 'Comment'}
          </CardText>
        </CardBody>
        <CardBody>
          {props.isLike ? (
            <Button
              style={{ padding: "12px 10px", float: "left" }}
              onClick={e => handleLike(e, props.removeLike, "dislike", id, props.userId, props.like)}>
              <FaThumbsDown className="text-primary"/>Dislike
            </Button>
          ) : (
            <Button
              style={{ padding: "12px 10px", float: "left" }}
              onClick={e => handleLike(e, props.createLike, "like", id, props.userId)}>
              <FaThumbsUp className="text-primary"/>Like
            </Button>
          )}
          <CommentDropDown style={{ float: "left" }} postId={id} comments={props.comments}/>
        </CardBody>
      </Card>
    </Row>
  )
}

const mapStateToProps = (state, props) => {
  return {
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
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Post)
