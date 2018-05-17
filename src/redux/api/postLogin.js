export const postLogin = async user => {
  console.log(process.env.REACT_APP_API_URL);
  return await fetch(`${process.env.REACT_APP_API_URL}/login`, {
    method : "POST",
    headers : {
      "Content-Type" : "application/json",
      "Accept" : "application/json",
      "Access-Control-Allow-Origin": `http:localhost:3000`
    },
    mode: "cors",
    body : JSON.stringify(user)
  })
}
