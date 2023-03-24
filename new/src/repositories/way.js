import axiosInstance from '@/repositories'
import store from '@/store/StoreIndex'
import { signOut } from '@/store/StoreUser'
import { 
  setWay,
  setWayArrows,
  setWayStatus
} from '@/store/StoreWay'

const WayRepository = () => {

  const apiPath = process.env.NEXT_PUBLIC_API_PATH

  return {
    getWay: async () => {
      try{
        const way = await axiosInstance.get(apiPath + 'api/v1/user-module')
        await store.dispatch(setWay(way.data))
        const arrows = await axiosInstance.get(apiPath + 'api/v1/arrow')
        await store.dispatch(setWayArrows(arrows.data))
        const statuses = await axiosInstance.get(apiPath + 'api/v1/user-module/status')
        await store.dispatch(setWayStatus(statuses.data))
        return true
      } catch(error) {
        if(error?.response?.status === 401) {
          store.dispatch(signOut())
        } else {
          console.log(error)
        }
      }
    },
    getModule: async (params) => {
      try{
        const module = await axiosInstance.get(apiPath + 'api/v1/user-module/full-info', {
          params: params
        })
        return module.data
      } catch(error) {
        if(error?.response?.status === 401) {
          store.dispatch(signOut())
        } else {
          console.log(error)
        }
      }
    },
    getProject: async (params) => {
      try{
        const project = await axiosInstance.get(apiPath + 'api/v1/user-project', {
          params: params
        })
        return project.data
      } catch(error) {
        if(error?.response?.status === 401) {
          store.dispatch(signOut())
        } else {
          console.log(error)
        }
      }
    },
    getStep: async (params) => {
      try{
        const step = await axiosInstance.get(apiPath + 'api/v1/user-project/step/'+params.step, {
          params: params
        })
        return step.data
      } catch(error) {
        if(error?.response?.status === 401) {
          store.dispatch(signOut())
        } else {
          console.log(error)
        }
      }
    },
    getTest: async (params) => {
      try{
        const test = await axiosInstance.get(apiPath + 'api/v1/quiz', {
          params: params
        })
        return test.data
      } catch(error) {
        if(error?.response?.status === 401) {
          store.dispatch(signOut())
        } else {
          console.log(error)
        }
      }
    }
  }

}

export default WayRepository(axiosInstance)