export const postSignup = async (newUser) => {
  return await fetch(`${process.env.REACT_APP_API_URL}/signup`, {
    method: "POST",
    headers : {
      "Content-Type" : "application/json",
      "Accept" : "application/json",
      "Access-Control-Allow-Origin": `http:localhost:3000`
    },
    body: JSON.stringify(newUser)
  })
}
