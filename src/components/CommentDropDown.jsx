import React, { Component } from 'react'
import { Accordion, Icon, Feed, List } from 'semantic-ui-react'
import FaComment from 'react-icons/lib/fa/comment'
import FaThumbsUp from 'react-icons/lib/fa/thumbs-up'
import AddComment from './AddComment'
import Post from './Post'
import { createComment } from '../redux/actions/comments'
import Moment from 'react-moment'

export default class CommentDropDown extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state
    const { postId } = this.props

    return (
      <Accordion styled>
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
          <FaComment className="text" color/> Comment
          {/* <FaThumbsUp className="text" />{`   `}Like{`   `} */}
        </Accordion.Title>
        <Accordion.Content active={activeIndex !== 0}  >

          {this.props.comments.map(comment => (
            <List.Item>
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
                    </Feed.Meta>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </List.Item>
          ))}
          <AddComment  postId={ postId }/>
        </Accordion.Content>
      </Accordion>
    )
  }
}
