export const getUserById = async id => {
  return await fetch(`${process.env.REACT_APP_API_URL}/users/${id}`, {
    method : "GET",
    headers : {
      "Content-Type" : "application/json",
      "Accept" : "application/json",
      "Access-Control-Allow-Origin": `http:localhost:3000`
    },
    mode: "cors"
  })
}
