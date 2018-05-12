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
import { Comment } from 'semantic-ui-react'
import FaComment from 'react-icons/lib/fa/comment'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createComment } from '../redux/actions/comments'
import AddComment from './AddComment'
import Moment from 'react-moment'

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
  console.log("email", email, "username", username, "user_image", user_image);
  // let { username, user_image } = props.user
  // console.log("PROPS.POST ====> ", props.post);

  console.log(props);
  return (
    <Row className="mt-3">
      <Col>
        <Card>
          {/* <Comment>
            <Comment.Avatar src='/assets/images/avatar/small/matt.jpg' />
            <Comment.Content>
              <Comment.Author as='a'>Matt</Comment.Author>
              <Comment.Metadata>
                <div>Today at 5:42PM</div>
              </Comment.Metadata>
            </Comment.Content>
          </Comment> */}
          {/* <CardBody> */}
            <CardTitle>
              {username}
            </CardTitle>
            <CardTitle>
              {location}
            </CardTitle>
            <CardText>
              {description}
            </CardText>
          {/* </CardBody> */}
          <CardImg
            top
            width="100%"
            src={image_url}
            alt="Card image cap"
          />
        <CardBody>
          {/* <CardTitle>
            {location}
          </CardTitle>
          <CardText>
            {description}
          </CardText>
            <hr /> */}
          <Moment fromNow ago>{created_at}</Moment> ago | {' '}
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
  // console.log("STATECOMMENTS",  state.comments);
  // console.log(props.post.user_id);
  // console.log(state.users);
  // console.log(state.users.find(user => user.id === props.post.user_id));
  console.log('props ', props);
  return {
    comments: state.comments.filter(comment => comment.post_id === props.post.id),
    // user: props.user
  }
};

const mapDispatchToProps = dispatch =>
bindActionCreators({ dispatch })

export default connect(mapStateToProps, mapDispatchToProps)(Post)
// export default Post
