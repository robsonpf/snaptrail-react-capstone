import React from 'react'
import { connect } from 'react-redux'
import Post from './Post'

const PostList = ({ posts, users, fromUser}) => {
  let listOfPosts = posts.map(post => <Post key={post.id} post={post} fromUser={fromUser}/>)

  return <div>{listOfPosts}</div>
};

const mapStateToProps = ({ posts, filter}, props) => {
  return {
    posts: props.posts.filter(post => post.location.toLowerCase().includes(filter)),
    fromUser: props.fromUser ? true : false
  }
}

export default connect(mapStateToProps, null)(PostList)
