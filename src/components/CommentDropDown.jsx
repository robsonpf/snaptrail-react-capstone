import React, { Component } from 'react'
import {
  Accordion,
  Icon,
  Feed,
  List
} from 'semantic-ui-react'
import FaComment from 'react-icons/lib/fa/comment'
import AddComment from './AddComment'
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
        <Accordion.Title className="text-primary" active={activeIndex === -1} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
          <FaComment className="text"/> Comment
        </Accordion.Title>
        <Accordion.Content active={activeIndex === -1}  >

          {this.props.comments.map(comment => (
            <List.Item key={comment.id}>
              <Feed size='large'>
                <Feed.Event className="mt-4">
                  <Feed.Label image={comment.user.user_image} />
                  <Feed.Content style={{ margin: "-0.5em 0px -1.64286em 1.14286em" }}>
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
