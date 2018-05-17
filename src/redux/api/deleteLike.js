export const deleteLike = async (id, token) => {
  return await fetch(`${process.env.REACT_APP_API_URL}/likes/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Access-Control-Allow-Origin": `http:localhost:3000`,
      "Authorization": token
    },
    mode: "cors"
  })
}
