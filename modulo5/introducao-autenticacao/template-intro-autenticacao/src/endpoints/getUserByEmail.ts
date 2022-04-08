import connection from "../data/connection";
import { user } from "../data/tables";


const getUserByEmail = async (email: string) => {
    const result = await connection(user)
        .select()
        .where({ email })

    return result[0]
}

export default getUserByEmail;