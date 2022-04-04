import connection from "../data/connection";
import { user } from "../data/tables";


const getUserById = async (id: string) => {
    const result = await connection(user)
        .select()
        .where({ id })

    return result[0]
}

export default getUserById;