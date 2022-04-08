import connection from "../data/connection";
import { user } from "../data/tables";

export const createUser = async (
    id: string,
    email: string,
    password: string) => {

    await connection
        .insert({
            id,
            email,
            password,
        })
        .into(user);
};