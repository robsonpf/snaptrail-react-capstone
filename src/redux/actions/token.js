import decode from 'jwt-decode'

export const fetchToken = () => {
  try {
    const token = localStorage.get("token")

    if (!token) {
      localStorage.removeItem("token")
      return null
    }

    const { sub, exp } = decode(token)

    if (exp * 1000 < Date.now()) {
      localStorage.removeItem("token")
      return null
    }

    return token
  } catch (error) {
    localStorage.removeItem("token")
    return null
  }
}
