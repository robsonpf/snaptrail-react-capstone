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
  Icon,
  Image,
  Segment,
  Form,
  Button
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
          <FaComment /> {' '} {props.comments.length} {' '}
          {props.comments.length !== 1 ? 'Comments' : 'Comment'}
          <AddComment postId={id}/>
            {props.comments.map(comment => (
                <Feed size='medium' key={comment.id}>
                <Feed.Event>
                  <Feed.Label image={comment.user.user_image} />
                    <Feed.Content>
                      <Feed.Summary>
                        <Feed.User>{comment.user.username}</Feed.User>
                        <Feed.Date><Moment fromNow ago>{comment.created_at}</Moment> ago</Feed.Date>
                      </Feed.Summary>
                      <Feed.Extra text style={{fontSize: 12}}>
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
            ))}
        </CardBody>
      </Card>
    </Row>
  )
};

const mapStateToProps = (state, props) => {
  return {
    comments: state.comments.filter(comment => comment.post_id === props.post.id)
  }
};

const mapDispatchToProps = dispatch =>
bindActionCreators({ dispatch })

export default connect(mapStateToProps, mapDispatchToProps)(Post)
