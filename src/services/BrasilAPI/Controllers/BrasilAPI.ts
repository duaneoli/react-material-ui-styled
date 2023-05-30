import ResponseDTO from 'dtos/ResponseDTO'
import instanceOfBrasilAPI from '../instanceOfBrasilAPI'

export class BrasilAPIController {
  static getStates(): Promise<ResponseDTO<any>> {
    return instanceOfBrasilAPI.get('/ibge/uf/v1')
  }

  static getCities(stateInitials: string): Promise<ResponseDTO<any>> {
    return instanceOfBrasilAPI.get(`/ibge/municipios/v1/${stateInitials}?providers=dados-abertos-br,gov,wikipedia`)
  }

  static getAddress(zipCode: string): Promise<ResponseDTO<any>> {
    return instanceOfBrasilAPI.get(`/cep/v1/${zipCode}`)
  }
}
