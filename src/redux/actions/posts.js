export const FETCH_POSTS_SUCESS = 'FETCH_POSTS_SUCESS'
export const FETCH_POSTS_FAILED = 'FETCH_POSTS_FAILED'

export const CREATE_POST_SUCESS = 'CREATE_POST_SUCESS'
export const CREATE_POST_FAILED = 'CREATE_POST_FAILED'
console.log('am i here in action posts');
export const getAllPosts = () => {
  return async dispatch => {
    try {
      let response = await fetch(`${process.env.REACT_APP_API_URL}/posts`);
      let posts = await response.json();
      console.log('posts = ', posts);
      dispatch({
        type: FETCH_POSTS_SUCESS,
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

export const createPost = newPost => {
  return async dispatch => {
    try {
      let response = await fetch(`${process.env.REACT_APP_API_URL}/posts`, {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log("RESPONSE ==> ", response);
      let post = await response.json();
      dispatch({
        type: CREATE_POST_SUCESS,
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
