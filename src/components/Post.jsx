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
import { Comment, Feed, Image } from 'semantic-ui-react'
import FaComment from 'react-icons/lib/fa/comment'
import FaThumbsUp from 'react-icons/lib/fa/thumbs-up'
import FaThumbsDown from 'react-icons/lib/fa/thumbs-down'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createComment } from '../redux/actions/comments'
import AddComment from './AddComment'
import Moment from 'react-moment'
import CommentDropDown from './CommentDropDown'

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
            {/* <FaThumbsUp className="text-primary"/> */}
            {`  `} {props.comments.length} {`  `}
            {props.comments.length !== 1 ? 'Likes' : 'Like'}
          </CardText>
          <hr/>
          {/* <FaComment className="text" color/> Comment
            {`    •    `}
          <FaThumbsUp className="text" />{`   `}Like */}
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
    comments: state.comments.filter(comment => comment.post_id === props.post.id)
  }
}

const mapDispatchToProps = dispatch =>
bindActionCreators({ dispatch })

export default connect(mapStateToProps, mapDispatchToProps)(Post)
