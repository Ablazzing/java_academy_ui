import axiosInstance from '@/repositories'
import store from '@/store/StoreIndex'
import { 
  signOut,
  setProfile,
  setNotifications
} from '@/store/StoreUser'

const ProfileRepository = () => {

  const apiPath = process.env.NEXT_PUBLIC_API_PATH

  return {
    getProfile: async () => {
      try{
        const response = await axiosInstance.get(apiPath + 'api/v1/profile')
        store.dispatch(setProfile(response.data))
        return true
      } catch(error) {
        if(error?.response?.status === 401) {
          store.dispatch(signOut())
        } else {
          console.log(error)
        }
      }
    },
    setPassword: async () => {
      try{
        
      } catch(error) {
        if(error?.response?.status === 401) {
          store.dispatch(signOut())
        } else {
          console.log(error)
        }
      }
    },
    setPhoto: async () => {
      try{
        
      } catch(error) {
        if(error?.response?.status === 401) {
          store.dispatch(signOut())
        } else {
          console.log(error)
        }
      }
    },
    setData: async (data) => {
      try{
        const response = await axiosInstance.post(apiPath + 'api/v1/profile/user-data', data)
        console.log(response, data)
      } catch(error) {
        if(error?.response?.status === 401) {
          store.dispatch(signOut())
        } else {
          console.log(error)
        }
      }
    },
    getNotificationsCount: async () => {
      try{
        const response = await axiosInstance.get(apiPath + 'api/v1/notification/count')
        store.dispatch(setNotifications({ 
          key: 'notificationsCount',
          state: response.data 
        }))
        return true
      } catch(error) {
        if(error?.response?.status === 401) {
          store.dispatch(signOut())
        } else {
          console.log(error)
        }
      }
    },
    getNotificationsList: async () => {
      try{
        const response = await axiosInstance.post(apiPath + 'api/v1/notification')
        console.log(response)
        store.dispatch(setNotifications({ 
          key: 'notifications',
          state: response.data 
        }))
        return true
      } catch(error) {
        if(error?.response?.status === 401) {
          store.dispatch(signOut())
        } else {
          console.log(error)
        }
      }
    },
  }

}

export default ProfileRepository(axiosInstance)