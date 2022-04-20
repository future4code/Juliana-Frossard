import connection from "../../data/connection";
import { userTable } from "../../data/tables";

const createUser = async (
    id: string,
    name: string,
    email: string,
    password: string) => {

    await connection(userTable)
        .insert({
            id,
            name,
            email,
            password
        })
}

export default createUser;