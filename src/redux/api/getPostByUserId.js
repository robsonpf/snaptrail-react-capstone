export const getPostsByUserId = async id => {
  return await fetch(`${process.env.REACT_APP_API_URL}/posts/${id}/user`)
}
