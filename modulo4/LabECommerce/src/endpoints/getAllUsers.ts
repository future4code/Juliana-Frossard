import { Request, Response } from 'express';
import connection from '../connection';
import { User } from '../types/User';

export const getAllUsers = async (
    req: Request, res: Response): Promise<void> => {
    try {
        const users: User[] = await connection('labecommerce_users')

        res.status(200).send(users)
    } catch (error) {
        res.status(500).send('Unexpected server error')
    }
}

export default getAllUsers;