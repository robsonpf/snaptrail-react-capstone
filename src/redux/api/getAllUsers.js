export const getAllUsers = async () => {
  return await fetch(`${process.env.REACT_APP_API_URL}/users`)
}
