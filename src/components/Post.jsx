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
import {
  Comment,
  Feed,
  Icon
} from 'semantic-ui-react'
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
          <CardBody>
            <CardTitle>
              {username} <br/>
            </CardTitle>
            <Moment fromNow ago>{created_at}</Moment> ago
            <CardTitle>
              {location}
            </CardTitle>
            <CardText>
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

          {/* <Feed size='large'>
            <Feed.Event>
              <Feed.Label image='/assets/images/avatar/small/elliot.jpg' />
              <Feed.Content>
                <Feed.Summary>
                  <Feed.User>Elliot Fu</Feed.User> added you as a friend
                  <Feed.Date>1 Hour Ago</Feed.Date>
                </Feed.Summary>
                <Feed.Meta>
                  <Feed.Like>
                    <Icon name='like' />
                    4 Likes</Feed.Like>
                </Feed.Meta>
              </Feed.Content>
            </Feed.Event>
          </Feed> */}

          <FaComment /> {' '} {props.comments.length} {' '}
          {props.comments.length !== 1 ? 'Comments' : 'Comment'}
          <AddComment postId={id}/>
          <ul className="mt-2">
            {props.comments.map(comment => (
              // <li key={comment.id}>
                <Feed size='large' key={comment.id}>
                  <Feed.Event>
                    <Feed.Label image={comment.user.user_image} />
                    <Feed.Content>
                      <Feed.Summary>
                        <Feed.User>{comment.user.username}</Feed.User>
                      <Feed.Date><Moment fromNow ago>{comment.created_at}</Moment> ago</Feed.Date>
                      </Feed.Summary>
                      <Feed.Extra text>
                        {comment.comment}
                      </Feed.Extra>
                      <Feed.Meta>
                        {/* <Feed.Like>
                          <Icon name='like' />
                          4 Likes</Feed.Like> */}
                      </Feed.Meta>
                    </Feed.Content>
                  </Feed.Event>
                </Feed>
              // </li>
            ))}
          </ul>
        </CardBody>
      </Card>
     </Col>
    </Row>
  )
};

const mapStateToProps = (state, props) => {
  return {
    comments: state.comments.filter(comment => comment.post_id === props.post.id),
    // user: props.user
  }
};

const mapDispatchToProps = dispatch =>
bindActionCreators({ dispatch })

export default connect(mapStateToProps, mapDispatchToProps)(Post)
// export default Post
