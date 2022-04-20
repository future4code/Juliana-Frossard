import { IdGenarator } from './../../services/idGenerator';
import { tableJoin } from './../../data/tables';
import connection from "../../data/connection";

const createJoin = async (id_user: string, id_recipes: string) => {
    await connection(tableJoin)
        .insert({
            id: IdGenarator(),
            id_user,
            id_recipes
        })
};

export default createJoin;