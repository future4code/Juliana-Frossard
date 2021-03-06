import { Request, Response } from 'express';
import connection from '../../connection';


export const createUser = async (
    req: Request, res: Response): Promise<void> => {

    try {
        const { name, email, password } = req.body

        await connection('labecommerce_users')
            .insert({
                id: Math.floor(Date.now() * Math.random()),
                name,
                email,
                password
            })
        res.status(201).send('Created User')
    } catch (error) {
        res.status(500).send('ERROR')
    }
}

export default createUser;