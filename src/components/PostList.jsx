import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import { fetchUsers } from '../redux/actions/users'

const findUser = (users, post) => {
  console.log('users = ', users);
  return users.find(user => user.id === post.user_id)
}

const PostList = ({ posts, users }) => {
  let listOfPosts = posts.map(post => {
    const user = findUser(users, post)
    console.log(user);
    return <Post
      key={post.id}
      post={post}
      user={user}
    />
  }
  )

  return <div>{listOfPosts}</div>
};

const mapStateToProps = ({ posts, filter }, props) => {
  console.log(props);
  return {
    posts: props.posts.filter(post => post.location.toLowerCase().includes(filter)),
    users: props.users
  }
}

// const mapDispatchToProps = dispatch =>
// bindActionCreators({
//   fetchUsers
// }, dispatch )


export default connect(mapStateToProps, null)(PostList)
// export default PostList
