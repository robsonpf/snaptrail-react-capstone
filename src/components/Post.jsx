import React from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardTitle,
  CardSubtitle,
  CardBody,
  Row,
  Col
} from 'reactstrap'
import { Comment, Feed, Image, Button } from 'semantic-ui-react'
import FaComment from 'react-icons/lib/fa/comment'
import FaThumbsUp from 'react-icons/lib/fa/thumbs-up'
import FaThumbsDown from 'react-icons/lib/fa/thumbs-down'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createComment } from '../redux/actions/comments'
import { createLike } from '../redux/actions/likes'
import { removeLike } from '../redux/actions/likes'
import AddComment from './AddComment'
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
    user: { email, username, user_image }
  } = props.post


  return (
    <Row className="mt-3">
      <Card>
        <CardBody>
          <Image
            src={user_image}
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
            {`  `} {props.comments.length} {`  `}
            {props.comments.length !== 1 ? 'Comments' : 'Comment'}
            {`  •  `}

            {`  `} {props.likes.length} {`  `}
            {props.likes.length !== 1 ? 'Likes' : 'Like'}
            {props.isLike ? (
              <Button
                style={{ padding: "5px 10px" }}
                onClick={e => handleLike(e, props.removeLike, "dislike", id, props.userId, props.like)}>
                <FaThumbsDown className="text-primary"/>Dislike
              </Button>
            ) : (
              <Button
                style={{ padding: "5px 10px" }}
                onClick={e => handleLike(e, props.createLike, "like", id, props.userId)}>
                <FaThumbsUp className="text-primary"/>Like
              </Button>
            )}
          </CardText>
        </CardBody>
        <CardBody>
          <CommentDropDown postId={id} comments={props.comments}/>
        </CardBody>
      </Card>
    </Row>
  )
}

const mapStateToProps = (state, props) => {
  return {
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
