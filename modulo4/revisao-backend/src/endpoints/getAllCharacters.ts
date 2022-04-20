import { Request, Response } from "express";
import connection from "../connection";
import { Character } from "../types";

export const getAllCharacters = async (
    req: Request, res: Response): Promise<void> => {

    try {
        const characters: Character[] =
            await connection("character")

        res.send(characters)
    } catch (error) {
        res.status(500).send('Unexpected server error')
    }
}



export default getAllCharacters;