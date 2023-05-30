import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import AxiosErrorDTO from 'dtos/AxiosErrorDTO'
import ResponseDTO from 'dtos/ResponseDTO'
import SessionStorage from 'helpers/SessionStorage'

export default class DefaultAxios {
  instanceOfAxios: AxiosInstance

  constructor(config: AxiosRequestConfig) {
    this.instanceOfAxios = axios.create(config)
  }

  setInterceptorOn(direct: 'request' | 'response', config?: AxiosRequestConfig) {
    switch (direct) {
      case 'response':
        this.instanceOfAxios.interceptors.response.use(
          (response) => new ResponseDTO(response),
          (error) => {
            throw new AxiosErrorDTO(error)
          },
        )
        break
      default:
        this.instanceOfAxios.interceptors.request.use((defaultConfig) => {
          const token = SessionStorage.get('access')
          const headers = { ...defaultConfig.headers }

          if (token) headers.Authorization = `Bearer ${token}`
          headers.provider = process.env.REACT_APP_AUTHENTICATION_PROVIDER || ''
          return { ...defaultConfig, headers, ...config }
        })
        break
    }
    return this
  }

  getInstanceOf(): AxiosInstance {
    return this.instanceOfAxios
  }
}
