export const postLogin = async user => {
  return await fetch(`${process.env.REACT_APP_API_URL}/login`, {
    method : "POST",
    headers : {
      "Content-Type" : "application/json",
      "Accept" : "application/json"
    },
    body : JSON.stringify(user)
  })
}
