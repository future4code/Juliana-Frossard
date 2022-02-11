import { getAddressInfo } from './../services/getAddressInfo';
import {Request, Response} from 'express'

export const createUser = async (req: Request, res: Response) => {
    try {
        getAddressInfo(i)
        res.send('oi')

    } catch (error) {
        res.send(error)
    }
}