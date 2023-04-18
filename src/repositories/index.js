import axios from 'axios'
import { appStore, setProfile, removeProfile, setNotify } from '@/store'

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
    //values.email = "y22291@ya.ru"
    //values.password = "terrrr"
    values.email = 'y2286122@yandex.ru'
    values.password = 'terrrr'
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
  forgot: async (values) => {
    try{
      const response = await axiosInstance.post(api + 'api/auth/forget-password', values)
      return response.data
    } catch(error) {
      return false
    }
  }
}

const user = {
  getProfile: async () => {
    try{
      const response = await axiosInstance.get(api + 'api/v1/profile')
      return response.data
    } catch(error) {
      sendError(error)
      return false
    }
  },
  setPassword: async (values) => {
    try{
      const response = await axiosInstance.post(api + 'api/v1/profile/password', values)
      return response.data
    } catch(error) {
      sendError(error)
      return false
    }
  },
  setPhoto: async (values) => {
    try{
      const response = await axiosInstance.post(api + 'api/v1/profile/photo', values, {
        headers: {
          'Content-type': 'multipart/form-data'
        }
      })
      if(response.data.image) {
        const profile = JSON.parse(JSON.stringify(appStore.getState().app.profile))
        profile.image = response.data.image
        await appStore.dispatch(setProfile(profile))
      }
      return response.data
    } catch(error) {
      sendError(error)
      return false
    }
  },
  setData: async (values) => {
    try{
      const response = await axiosInstance.post(api + 'api/v1/profile/user-data', values)
      return response.data
    } catch(error) {
      sendError(error)
      return false
    }
  }
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
  getModuleAdmin: async (params) => {
    try{
      const response = await axiosInstance.get(api + 'api/v1/moduleInfo', {
        params: params
      })
      return response.data
    } catch(error) {
      sendError(error)
      return false
    }
  },
  putModule: async (params) => {
    try{
      const response = await axiosInstance.put(api + 'api/v1/user-module', {
        params: params
      })
      return response.data
    } catch(error) {
      sendError(error)
      return false
    }
  },
  createModule: async (values) => {
    try{
      const response = await axiosInstance.post(api + 'api/v1/moduleInfo', values)
      return response.data
    } catch(error) {
      sendError(error)
      return false
    }
  },
  updateModule: async (values) => {
    try{
      const response = await axiosInstance.put(api + 'api/v1/moduleInfo', values)
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
  getProjects: async () => {
    try{
      const response = await axiosInstance.get(api + 'api/v1/project')
      return response.data
    } catch(error) {
      sendError(error)
      return false
    }
  },
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
  createProject: async (values) => {
    try{
      const response = await axiosInstance.post(api + 'api/v1/project', values)
      return response.data
    } catch(error) {
      sendError(error)
      return false
    }
  },
  getStep: async (params) => {
    try{
      const response = await axiosInstance.get(api + 'api/v1/user-project/step/'+params.stepNumber, {
        params: params
      })
      return response.data
    } catch(error) {
      sendError(error)
      return false
    }
  },
  sendProjectStep: async (values) => {
    try{
      const response = await axiosInstance.post(api + 'api/v1/user-project/user-step', values)
      return response.data
    } catch(error) {
      sendError(error)
      return false
    }
  }
}

const tests = {
  getTests: async () => {
    
  },
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
  },
  getTestResults: async (params) => {
    try{
      const response = await axiosInstance.get(api + 'api/v1/quiz/result', {
        params: params
      })
      return response.data
    } catch(error) {
      sendError(error)
      return false
    }
  },
  sendTest: async (values) => {
    try{
      const response = await axiosInstance.post(api + 'api/v1/quiz/user-module', values)
      return response.data
    } catch(error) {
      sendError(error)
      return false
    }
  },
  sendTestReset: async (values) => {
    try{
      const response = await axiosInstance.post(api + 'api/v1/quiz/reset-status', values)
      return response.data
    } catch(error) {
      sendError(error)
      return false
    }
  },
}

const comments = {
  getVideoComments: async (params) => {
    try{
      const response = await axiosInstance.get(api + 'api/v1/comment', {
        params: params
      })
      return response.data
    } catch(error) {
      sendError(error)
      return false
    }
  },
  sendVideoComment: async (values) => {
    try{
      const response = await axiosInstance.post(api + 'api/v1/comment', values)
      return response.data
    } catch(error) {
      sendError(error)
      return false
    }
  },
  sendAnswerVideoComment: async (values) => {
    try{
      const response = await axiosInstance.post(api + 'api/v1/comment/answer', values)
      return response.data
    } catch(error) {
      sendError(error)
      return false
    }
  }
}

const videos = {
  getVideo: async (params) => {
    try{
      const response = await axiosInstance.get(api + 'api/v1/video', {
        params: params
      })
      return response.data
    } catch(error) {
      sendError(error)
      return false
    }
  },
  createVideo: async (values) => {
    try{
      const response = await axiosInstance.post(api + 'api/v1/video', values)
      return response.data
    } catch(error) {
      sendError(error)
      return false
    }
  }
}

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
  create: async (values) => {
    try{
      const response = await axiosInstance.post(api + 'api/v1/notification/information', values)
      return response.data
    } catch(error) {
      sendError(error)
      return false
    }
  }
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