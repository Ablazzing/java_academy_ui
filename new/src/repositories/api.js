import axiosInstance from '@/repositories'
import store from '@/store/StoreIndex'
import { setNotifications } from '@/store/StoreApp'
import { signIn, signOut } from '@/store/StoreUser'

const ApiRepository = () => {

  const apiPath = process.env.NEXT_PUBLIC_API_PATH

  return {
    signin: async (values) => {
      values.username = 'Yuris2'
      values.role = ['admin']
      values.email = "y22291@ya.ru"
      values.password = "terrrr"
      //testuser@mail.ru
      try{
        const response = await axiosInstance.post(apiPath + 'api/auth/signin', values)
        await store.dispatch(signIn(response.data))
        return true
      } catch(error) {
        return false
      }
    },
    signup: async (values) => {
      try{
        await axiosInstance.post(apiPath + 'api/auth/signup', values)
        return true
      } catch(error) {
        return false
      }
    },
    getNotificationsCount: async () => {
      try{
        const response = await axiosInstance.get(apiPath + 'api/v1/notification/count')
        store.dispatch(setNotifications({ count: response.data }))
        return true
      } catch(error) {
        store.dispatch(signOut())
      }
    }
  }

}

export default ApiRepository(axiosInstance)