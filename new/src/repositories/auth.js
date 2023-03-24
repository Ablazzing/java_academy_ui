import axiosInstance from '@/repositories'
import ProfileRepository from '@/repositories/profile'
import store from '@/store/StoreIndex'
import { signIn } from '@/store/StoreUser'

const AuthRepository = () => {

  const apiPath = process.env.NEXT_PUBLIC_API_PATH

  return {
    signin: async (values) => {
      values.email = "y22291@ya.ru1"
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
    checkToken: async () => {
      const response = await ProfileRepository.getProfile()
      return response
    }
  }

}

export default AuthRepository(axiosInstance)