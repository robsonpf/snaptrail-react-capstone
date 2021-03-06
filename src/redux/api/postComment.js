export const postComment = async ({comment, post_id, user_id}, token) => {
  return await fetch(`${process.env.REACT_APP_API_URL}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      "Access-Control-Allow-Origin": `http:localhost:3000`,
      'Authorization': token
    },
    body: JSON.stringify({comment, post_id, user_id})
  })
}
