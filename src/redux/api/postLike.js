export const postLike = async (newLike, token) => {
  return await fetch(`${process.env.REACT_APP_API_URL}/likes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": token
    },
    body: JSON.stringify(newLike)
  })
}
