import { AxiosResponse } from 'axios'

export class ErrorDTO<T = any> {
  statusCode: number
  error: string
  message: string
  rejectedInputs?: Array<any>

  constructor(axiosError: AxiosResponse) {
    this.statusCode = axiosError.data.statusCode
    this.error = axiosError.data.error
    this.message = axiosError.data.message
  }
}
