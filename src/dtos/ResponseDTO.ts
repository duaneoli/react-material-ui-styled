import { AxiosResponse } from 'axios'

export default class ResponseDTO<T = any> {
  statusCode: number
  message: string
  data: T

  constructor(axiosResponse: AxiosResponse) {
    this.statusCode = axiosResponse.data.statusCode
    this.message = axiosResponse.data.message
    this.data = axiosResponse.data.data
  }
}
