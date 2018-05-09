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
import FaComment from 'react-icons/lib/fa/comment'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createComment } from '../redux/actions/comments'
import AddComment from './AddComment'
import Moment from 'react-moment'

const Post = props => {
  let { id, user_id, image_url, description, location, created_at } = props.post
  console.log("PROPS.POST ====> ", props.post);
  return (
    <Row className="mt-3">
      <Col>
        <Card>
          <CardImg
            top
            width="100%"
            src={image_url}
            alt="Card image cap"
          />
        <CardBody>
          <CardTitle>
            {user_id}
          </CardTitle>
          <CardSubtitle>
            {location}
          </CardSubtitle>
          <CardText>
            {description}
          </CardText>
            <hr />
          <Moment fromNow ago>{created_at}</Moment> ago |
          <FaComment /> {' '} {props.comments.length} {' '}
          {props.comments.length !== 1 ? 'Comments' : 'Comment'}
          <AddComment postId={id}/>
          <ul className="mt-2">
            {props.comments.map(comment => (
              <li key={comment.id}>{comment.comment}</li>
            ))}
          </ul>
        </CardBody>
        </Card>
      </Col>
    </Row>
  )
};

const mapStateToProps = (state, props) => {
  console.log("STATECOMMENTS",  state.comments);
  return {
    comments: state.comments.filter(comment => comment.post_id === props.post.id)
  }
};

const mapDispatchToProps = dispatch =>
bindActionCreators({ dispatch })

export default connect(mapStateToProps, mapDispatchToProps)(Post)
// export default Post
