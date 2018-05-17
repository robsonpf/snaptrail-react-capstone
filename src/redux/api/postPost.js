export const postPost = async (body, token) => {
  return await fetch(`${process.env.REACT_APP_API_URL}/posts`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  })
}
