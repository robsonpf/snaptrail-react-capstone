export const getAllLikes = async () => {
  return await fetch(`${process.env.REACT_APP_API_URL}/likes`)
}
