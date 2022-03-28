import { Address } from './../types/Address';
import axios from 'axios';
import { base_url_viacep } from '../constants/url_base';


export const getAddressInfo = async (cep: string):Promise<Address> => {
    const result = await axios.get(`${base_url_viacep}/${cep}/json/`)

    const adress: Address ={
        state: response.data.UF,
        city: response.data.localidade,
        neighborhood: response.data.bairro,
        street: response.data.logradouro
    }
}