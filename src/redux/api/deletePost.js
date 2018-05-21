export const deletePost = async (id, user_id, token) => {
  return await fetch(`${process.env.REACT_APP_API_URL}/posts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Access-Control-Allow-Origin": `http:localhost:3000`,
      "Authorization": token
    },
    body: JSON.stringify({ user_id }),
    mode: "cors"
  })
}
