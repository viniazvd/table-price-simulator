import axios from 'axios'
import { BASE_URL } from '../enviroment/baseUrl'

const instance = axios.create({
  baseURL: BASE_URL,

  validateStatus (status) {
    return status >= 200 && status < 300
  }
})

export default instance

instance.interceptors.response.use(mergeRedundantData)

function mergeRedundantData (response) {
  if (response.data && response.data.data) {
    return Object.assign(response, response.data)
  }

  return response
}
