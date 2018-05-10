export const getUserById = async id => {
  console.log('id in api call folder = ', id);
  return await fetch(`${process.env.REACT_APP_API_URL}/users/${id}`)
}
