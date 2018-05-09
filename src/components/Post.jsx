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
// import FaComment from 'react-icons/lib/fa/comment'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createComment } from '../redux/actions/comments'
import AddComment from './AddComment'

const Post = props => {
  let { id, user_id, image_url, description, location } = props.post
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
        </CardBody>
        </Card>
      </Col>
    </Row>
  )
};

const mapStateToProps = (state, props) => {
  console.log("STATECOMMENTS",  state.comment);
  return {
    comments: state.comments.filter(comment => comment.post_id === props.post.id)
  }
};

const mapDispatchToProps = dispatch =>
bindActionCreators({})

export default connect(mapStateToProps, mapDispatchToProps)(Post)
// export default Post
