import { User } from "../entities/User";
import { BaseDataBase } from "./BaseDataBase";
import { userTable } from "./tables";

export class UserDataBase extends BaseDataBase {
    public async searchUserByEmail(email: string): Promise<User> {
        try {
            const user = await BaseDataBase.connection(userTable)
                .select('*')
                .where({ email })
            return User.toUserModel(user[0])

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);

        }
    }
}