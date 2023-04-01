import axios from 'axios'
import { appStore, setProfile, removeProfile } from '@/store'

const axiosInstance = axios.create()
axiosInstance.interceptors.request.use((config) => {
    if(process.browser) {
      const token = window.localStorage.getItem('token')
      if(token) config.headers.Authorization = `Bearer ${token}`
    }
    return config
  }, (error) => {
    return Promise.reject(error)
  }
)

const api = process.env.NEXT_PUBLIC_API_PATH

const auth = {
  signin: async (values) => {
    values.email = "y22291@ya.ru"
    values.password = "terrrr"
    try{
      const response = await axiosInstance.post(api + 'api/auth/signin', values)
      await appStore.dispatch(setProfile(response.data))
      return response.data
    } catch(error) {
      sendError(error)
      return false
    }
  },
  signup: async (values) => {
    try{
      await axiosInstance.post(api + 'api/auth/signup', values)
      return true
    } catch(error) {
      return false
    }
  },
  forgot: async (values) => {}
}

const user = {
  getProfile: async () => {
    try{
      const response = await axiosInstance.get(api + 'api/v1/profile')
      await appStore.dispatch(setProfile(response.data))
      return true
    } catch(error) {
      sendError(error)
      return false
    }
  },
  setPassword: async () => {},
  setPhoto: async () => {},
  setData: async () => {}
}

const modules = {
  getModules: async () => {
    try{
      const response = await axiosInstance.get(api + 'api/v1/user-module')
      return response.data
    } catch(error) {
      sendError(error)
      return false
    }
  },
  getModule: async (params) => {
    try{
      const response = await axiosInstance.get(api + 'api/v1/user-module/full-info', {
        params: params
      })
      return response.data
    } catch(error) {
      sendError(error)
      return false
    }
  },
  getStatuses: async () => {
    try{
      const response = await axiosInstance.get(api + 'api/v1/user-module/status')
      return response.data
    } catch(error) {
      sendError(error)
      return false
    }
  },
}

const projects = {
  getProject: async (params) => {
    try{
      const response = await axiosInstance.get(api + 'api/v1/user-project', {
        params: params
      })
      return response.data
    } catch(error) {
      sendError(error)
      return false
    }
  },
  getStep: async (params) => {
    try{
      const response = await axiosInstance.get(api + 'api/v1/user-project/step/'+params.step, {
        params: params
      })
      return response.data
    } catch(error) {
      sendError(error)
      return false
    }
  },
}

const tests = {
  getTest: async (params) => {
    try{
      const response = await axiosInstance.get(api + 'api/v1/quiz', {
        params: params
      })
      return response.data
    } catch(error) {
      sendError(error)
      return false
    }
  }
}

const comments = {}

const videos = {}

const arrows = {
  getArrows: async () => {
    try{
      const response = await axiosInstance.get(api + 'api/v1/arrow')
      return response.data
    } catch(error) {
      sendError(error)
      return false
    }
  },
}

const notify = {
  getCount: async () => {
    try{
      const response = await axiosInstance.get(api + 'api/v1/notification/count')
      appStore.dispatch(setNotify(response.data))
      return true
    } catch(error) {
      sendError(error)
      return false
    }
  },
  getList: async () => {
    try{
      const response = await axiosInstance.post(api + 'api/v1/notification')
      return response.data
    } catch(error) {
      sendError(error)
      return false
    }
  },
}

const sendError = (error) => {
  (error?.response?.status === 401) && appStore.dispatch(removeProfile())
  console.log('Error:', error.response ? error.response : error)
}

export const appApi = () => {
  
  return {
    auth,
    user,
    modules,
    projects,
    tests,
    comments,
    videos,
    arrows,
    notify
  }

}