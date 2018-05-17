export const getAllUsers = async () => {
  return await fetch(`${process.env.REACT_APP_API_URL}/users`, {
    method : "GET",
    headers : {
      "Content-Type" : "application/json",
      "Accept" : "application/json",
      "Access-Control-Allow-Origin": `http:localhost:3000`
    },
    mode: "cors"
  })
}
