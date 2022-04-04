import connection from "../../data/connection";
import { userTable } from "../../data/tables";



const getUserById = async (id: string) => {
    const result = await connection(userTable)
        .select('*')
        .where({ id })
        
    return result[0]
}

export default getUserById;