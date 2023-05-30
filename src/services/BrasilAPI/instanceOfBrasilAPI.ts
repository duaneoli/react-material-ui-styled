import DefaultAxios from 'services/DefaultAxios'

const defaultOptions: any = {
  baseURL: process.env.REACT_APP_BRASIL_API,
}

const instanceOfIBGE = new DefaultAxios(defaultOptions).getInstanceOf()

export default instanceOfIBGE
