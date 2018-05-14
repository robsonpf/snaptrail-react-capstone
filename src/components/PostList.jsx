import React from 'react'
import { connect } from 'react-redux'
import Post from './Post'

const PostList = ({ posts, users }) => {
  let listOfPosts = posts.map(post => <Post key={post.id} post={post}/>)

  return <div>{listOfPosts}</div>
};

const mapStateToProps = ({ posts, filter }, props) => {
  return {
    posts: props.posts.filter(post => post.location.toLowerCase().includes(filter))
  }
}

export default connect(mapStateToProps, null)(PostList)
