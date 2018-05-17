export const getPostsByUserId = async (id, token) => {
  return await fetch(`${process.env.REACT_APP_API_URL}/posts/${id}/user`, {
    method : "GET",
    headers : {
      "Content-Type" : "application/json",
      "Accept" : "application/json",
      "Access-Control-Allow-Origin": `http:localhost:3000`,
      "Authorization": token
    },
    mode: "cors"
  })
}
