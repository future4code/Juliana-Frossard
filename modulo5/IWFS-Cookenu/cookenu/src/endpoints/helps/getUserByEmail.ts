import connection from "../../data/connection";
import { userTable } from "../../data/tables";



const getUserByEmail = async (email: string) => {
    const result = await connection(userTable)
        .select()
        .where({ email })
    return result[0]
}

export default getUserByEmail;