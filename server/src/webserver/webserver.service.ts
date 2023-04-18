import { Injectable, HttpException } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import { AxiosResponse } from 'axios'

@Injectable()
export class WebserverService {

  constructor(private readonly httpService: HttpService) {}

  async get(url: string, params: any): Promise<AxiosResponse<string>> {
    try{
      const response: any = await this.httpService.axiosRef.get(url, params)
      return response.data
    } catch(e: any) {
      let status = e?.response?.status ? e?.response?.status : 401
      status = status ? status : 401
      const message = e?.response?.data ? e?.response?.data : {}
      throw new HttpException(message, status)
    }
  }
  
  async post(url: string, data: object, headers: any): Promise<AxiosResponse<string>> {
    try{
      headers.headers = headers.headers ? headers.headers : {}
      const response: any = await this.httpService.axiosRef.post(url, data, headers)
      return response.data
    } catch(e: any) {
      let status = e?.response?.status ? e?.response?.status : 401
      status = status ? status : 401
      const message = e?.response?.data ? e?.response?.data : {}
      throw new HttpException(message, status)
    }
  }
  
  async put(url: string, data: object, headers: any): Promise<AxiosResponse<string>> {
    try{
      headers.headers = headers.headers ? headers.headers : {}
      const response: any = await this.httpService.axiosRef.put(url, data, headers)
      return response.data
    } catch(e: any) {
      let status = e?.response?.status ? e?.response?.status : 401
      status = status ? status : 401
      const message = e?.response?.data ? e?.response?.data : {}
      throw new HttpException(message, status)
    }
  }

}