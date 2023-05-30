import { AxiosResponse } from 'axios'
import { ErrorDTO } from './ErrorDTO'

export default class AxiosErrorDTO {
  response: AxiosResponse<ErrorDTO>
  name: string
  message: string
  statusCode: number
  constructor(error: any) {
    this.response = error.response
    this.name = error.name
    this.message = error.message
    this.statusCode = error.status
  }
}
