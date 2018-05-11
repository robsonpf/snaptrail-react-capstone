import decode from "jwt-decode"

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_FAILED = 'FETCH_POSTS_FAILED'

export const FETCH_POSTS_BY_USER_SUCCESS = 'FETCH_POSTS_BY_USER_SUCCESS'
export const FETCH_POSTS_BY_USER_FAILED = 'FETCH_POSTS_BY_USER_FAILED'

export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS'
export const CREATE_POST_FAILED = 'CREATE_POST_FAILED'

export const getAllPosts = () => {
  return async dispatch => {
    try {
      let response = await fetch(`${process.env.REACT_APP_API_URL}/posts`)
      let posts = await response.json()
      // console.log('posts = ', posts)
      dispatch({
        type: FETCH_POSTS_SUCCESS,
        payload: posts
      })
    } catch(err) {
      dispatch({
        type: FETCH_POSTS_FAILED,
        payload: err
      })
    }
  }
}

export const fetchPostByUser = id => {
  return async dispatch => {
    try {
      let response = await fetch(`${process.env.REACT_APP_API_URL}/posts/${id}/user`, {
        method: "GET",
        headers: {
          "Authorization": localStorage.getItem("token")
        }
      })
      let postsByuser = await response.json()

// console.log(response);
// console.log(postsByuser);

      dispatch({
        type: FETCH_POSTS_BY_USER_SUCCESS,
        payload: postsByuser
      })
    } catch(error) {
      dispatch({
        type: FETCH_POSTS_BY_USER_FAILED,
        payload: error
      })
    }
  }
}

export const createPost = newPost => {
  return async dispatch => {
    try {
      let token = localStorage.getItem("token")
      console.log("what is token", token);
      let user_id = decode(token).sub.id
      console.log("user_id from posts actions", user_id);
      let response = await fetch(`${process.env.REACT_APP_API_URL}/posts`, {
        method: 'POST',
        body: JSON.stringify({...newPost, user_id}),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        }
      })
     console.log("RESPONSE ==> ", response)
      let post = await response.json()
      dispatch({
        type: CREATE_POST_SUCCESS,
        payload: post
      })
    } catch (err) {
      dispatch({
        type: CREATE_POST_FAILED,
        payload: err
      })
    }
  }
}
