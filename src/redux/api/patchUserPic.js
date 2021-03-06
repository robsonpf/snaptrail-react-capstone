export const patchUserPic = (id, user_image, token) => {
  return fetch(`${process.env.REACT_APP_API_URL}/users/${id}`, {
    method: "PATCH",
    body: JSON.stringify({user_image}),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Access-Control-Allow-Origin": `http:localhost:3000`,
      "Authorization": token
    },
    mode: "cors"
  })
}
