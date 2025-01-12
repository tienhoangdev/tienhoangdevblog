import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const navigate = useNavigate()

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      toast.error(error?.response?.message || 'Request failed')
      navigate('/login')
    }
    if (error?.response?.status === 500) {
      toast.error('Internal server error, please try again later')
    }
    return Promise.reject(error)
  },
)
