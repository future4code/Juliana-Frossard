import { User } from './../../model/user';
import { BaseDataBase } from "../BaseDataBase";
import { userTable } from "../tables";


export class UserDataBase extends BaseDataBase {
    public async findUserByEmail(email: string): Promise<User> {
        try {
            const user = await BaseDataBase.connection(userTable)
                .select('id', 'name', 'email', 'role')
                .where({ email })
            return user[0] && User.toUserModel(user[0])

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);

        }
    };
    public async findUserById(id: string): Promise<User> {
        try {
            const user = await BaseDataBase.connection(userTable)
                .select('id', 'name', 'email', 'role')
                .where({ id })
            return user[0] && User.toUserModel(user[0])

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);

        }
    };
    public async createUser(user: User): Promise<void> {
        try {
            await BaseDataBase.connection(userTable)
                .insert({
                    id: user.getId(),
                    name: user.getName(),
                    email: user.getEmail(),
                    password: user.getPassword(),
                    role: user.getRole()
                })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    };
    public async getAllUser(): Promise<User[]> {
        try {
            const users = await BaseDataBase.connection(userTable)
                .select('id', 'name', 'email', 'role')

            return users.map((user => User.toUserModel(user)))

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);

        }
    };
}