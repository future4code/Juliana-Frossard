import { BaseDatabase } from "./BaseDataBase";

class Migrations extends BaseDatabase {
    public migrationsData = () => {
      this.getConnection()
        .raw(
        `
        CREATE TABLE IF NOT EXISTS amaroProducts (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR (255) NOT NULL
            );
            CREATE TABLE IF NOT EXISTS amaroTags (
            productId VARCHAR(255),
            name VARCHAR (255) NOT NULL ,
            FOREIGN KEY (productId) references amaroProducts(id)
            );
   `
      )
      .then(console.log)
      .catch(console.log);
  };
}

const createTables = new Migrations()
createTables.migrationsData()  

    