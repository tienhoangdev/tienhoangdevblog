import axios from 'axios'
import { Service } from 'src/config'

export const logIn = async (email, password) => {
  return axios
    .post(`${Service.AUTH_API}/api/v1/users/login`, {
      email,
      password,
    })
    .then((result) => result.data)
}
