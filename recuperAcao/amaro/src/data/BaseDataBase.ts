import knex from 'knex'
import dotenv from 'dotenv'
import Knex from 'knex';

dotenv.config()

export abstract class BaseDataBase {

    private static connection: Knex | null = null;

    protected getConnection(): Knex {
        if (!BaseDataBase.connection) {
            BaseDataBase.connection = knex({
                client: "mysql",
                connection: {
                    host: process.env.DB_HOST,
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_SCHEMA,
                    port: 3306,
                    multipleStatements: true
                },
            });
        }

        return BaseDataBase.connection;
    }
}